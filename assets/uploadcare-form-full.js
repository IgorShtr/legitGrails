// Helpers
function hideElements(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.style.display = "none";
  });
}

function toggleClass(element, className) {
  if (element) element.classList.toggle(className);
}

// General Cart Add
function postCartData(formData) {
  fetch(window.Shopify.routes.root + "cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Redirect to checkout or do something else
      window.document.location.href = "/cart/checkout";
    })
    .catch((error) => {
      console.error("Post to cart error:", error);
    });
}

/* DIALOG */
const formDialog = document.querySelector(".popup-container-u");
const overlay = document.querySelector(".popup-overlay-u");
const ANIMATION_TIME = 350;
const tabs = document.querySelector(".tabs-u");

/*
  openDialogButtons refers to "Upload Photo" buttons used on article pages,
  etc. On other pages, typically only one button is present.
*/
const openDialogButtons = document.querySelectorAll(".authenticate-btn");

function initOpenDialogButtons() {
  if (!tabs) return;
  document.querySelectorAll(".authenticate-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      overlay.classList.remove("hidden");
      overlay.classList.add("open");
      setTimeout(() => formDialog.classList.remove("transparent"), 200);
      tabs.style.height = `${tabs.querySelector(".tab-active").clientHeight}px`;
      document.body.classList.add("popup-page");
    });
  });
}

function closeDialog() {
  if (!formDialog && !overlay) return;
  formDialog.classList.add("transparent");
  overlay.classList.add("hiding");

  setTimeout(() => {
    document.body.classList.remove("popup-page");
    overlay.classList.remove("hiding", "open");
    overlay.classList.add("hidden");
  }, ANIMATION_TIME);
}

function cloneAndUpdateForm(form, container, index) {
  let formClone = form.cloneNode(true);
  formClone.classList.add(`product-card__${index}`);
  formClone.querySelectorAll("[id^='radio_']").forEach((el) => {
    const newId = `${el.id}_${index}`;
    el.id = newId;
    el.parentElement.setAttribute("for", newId);
  });
  container.appendChild(formClone);
}

function setFormStyles(isFormCart) {
  if (isFormCart) {
    document.querySelectorAll(".uploadcare").forEach((el) => {
      el.style.order = "6";
    });
    hideElements(".custom-cart-button");
    hideElements(".product_card-btns");
    hideElements(".product_checkout-btns");
  }

  if (document.body.classList.contains("template-article")) {
    const form = document.querySelector("#product-card-container .product-card");
    document.querySelectorAll(".product-box").forEach((el, index) => {
      cloneAndUpdateForm(form, el, index);
    });
  }
}

function setPresets(tags) {
  // We no longer sort by tags: categories appear in the order
  // they come from the JSON / generated HTML.

  const typeInputs = Array.from(document.querySelectorAll("input[name='types']"));
  if (!typeInputs.length) return;

  // Uncheck all categories first
  typeInputs.forEach((input) => {
    input.checked = false;
  });

  // Make the first category from the file/DOM the active one
  const firstInput = typeInputs[0];
  firstInput.checked = true;

  // Update global state and UI to match
  currentCollectionID = firstInput.id;
  switchTabs(currentCollectionID);
}

function updateTabAndTip(tab) {
  toggleClass(document.querySelector(".tab-active"), "tab-active");
  toggleClass(document.getElementById(`tab-${tab}`), "tab-active");
  toggleClass(document.querySelector(".tip-active"), "tip-active");
  toggleClass(document.getElementById(`tip-${tab}`), "tip-active");
}

// Update Step 2 Subtitle. Shoes substring has an exception.
function updateStepSubtitle(tab) {
  const titles = {
    "other-shoes-luxury": "shoes",
    "other-shoes-hype": "shoes",
  };
  document.getElementById("collection-title").innerText =
    titles[tab] || tab.replace("-", " ");
}

function switchTabs(tab) {
  updateTabAndTip(tab);
  document.querySelector(".tabs").style.height =
    document.querySelector(".tab-active").clientHeight + "px";
  updateStepSubtitle(tab);

  document.querySelectorAll(".uploaded").forEach((block) => {
    block.classList.remove("uploaded");
    block.querySelector(".tab-section__counter").innerHTML = "";
  });
}

const dataProductContainer = document.querySelector(".uploadcare-product-hidden");
const productData = JSON.parse(dataProductContainer.dataset.product);
console.log("productData", productData.tags);

const productID = document.getElementById("product-data").innerText;
const productType = document.getElementById("product-uploads").dataset.type;
const sessionStorageKey = "uploadcare_" + productID;
const uploaderContainer = document.querySelector(".uploadcare-attributes");
const uploadSubmit = document.getElementById("upload_submit");
const uploadcareCartButton = document.getElementById("upladcare-cart");

let formIsValid = false;
let store = {}; // { "bag_sole": [ 'uuid1','uuid2' ], "bag_insole": [...], etc. }
let currentCollectionID = document.querySelector("input[name='types']:checked")
  ? document.querySelector("input[name='types']:checked").id
  : null;
let isFormCart = document
  .getElementById("product-uploads")
  .classList.contains("form-cart");
let variantID = document.getElementById("selected-variant").value;

setFormStyles(isFormCart);
setPresets(productData.tags);

/* NEW: Keep track of all active file instances so we can cancel them if needed */
let activeFileInstances = [];

/*
  Step 1 radio-switch logic (switching between "bag", "shoes", etc.)
*/
function handleInputChange(event) {
  event.stopPropagation();

  cancelAllUploads();     // NEW: Cancels everything in flight
  resetUploaderData();    // NEW: Also clears store, resets states

  currentCollectionID = event.target.id;
  formIsValid = false;
  switchTabs(currentCollectionID);
}

/**
 * NEW: Cancel all current uploads
 */
function cancelAllUploads() {
  activeFileInstances.forEach((fileInstance) => {
    try {
      fileInstance.cancel();  // This calls .fail('user') internally
    } catch (e) {
      console.warn("Failed to cancel upload instance", e);
    }
  });
  activeFileInstances = [];
}

// Attach the "change" listener for radio inputs
document.querySelectorAll("input[name='types']").forEach((input) => {
  if (input.checked) {
    switchTabs(input.id);
    resetUploaderData();
    currentCollectionID = input.id;
  }
  input.addEventListener("change", handleInputChange);
});
/************************************/
/* 1) Attach event listeners to new native file inputs */
/************************************/

document.querySelectorAll(".native-uploader").forEach((inputEl) => {
  inputEl.addEventListener("change", handleFileInputChange);
});

/**********************************************
 * 2) The main handler for uploading multiple files
 **********************************************/
async function handleFileInputChange(event) {
  const input = event.currentTarget;
  const blockId = input.dataset.blockId;   // e.g. "bag_sole" or "bag_insole"
  const blockEl = document.getElementById(blockId);

  // Show loader, etc.
  if (blockEl) {
    blockEl.classList.add("uploading");
    const loaderLine = blockEl.querySelector(".loader-line");
    if (loaderLine) loaderLine.classList.add("visible");
  }

  // Merge any existing data from session, to avoid overwriting
  setCurrentUuids();

  const MAX_FILES_PER_BLOCK = 3;
  const existingCount = store[blockId]?.length || 0;
  const selectedCount = input.files.length;

  if (existingCount + selectedCount > MAX_FILES_PER_BLOCK) {
    showJsAlert(`<span class="body-text">The upload limit is <b class="bold">${MAX_FILES_PER_BLOCK} photos per upload</b> window. Additional files will not be accepted.</span>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.4558 8.48528L8.48523 25.4558" stroke="#3C1F1B" stroke-width="3" stroke-linecap="round"/>
        <path d="M8.48533 8.48528L25.4559 25.4558" stroke="#3C1F1B" stroke-width="3" stroke-linecap="round"/>
      </svg>`);

    if (blockEl) {
      blockEl.classList.remove("uploading");

      const loaderLine = blockEl.querySelector(".loader-line");
      if (loaderLine) {
        loaderLine.classList.remove("visible");
      }
    }

    input.value = "";
    return;
  }

  // Convert FileList to an array
  const fileList = Array.from(input.files);
  if (!fileList.length) return;

  // Use batch wrapper to create a file instance for each selected file
  const fileInstances = uploadcare.filesFrom("object", fileList, { publicKey: 'ad3d10f764f69a907860' }); 

  // NEW: Push these new file instances into the global list so we can cancel them
  activeFileInstances.push(...fileInstances);

  // We collect the newly uploaded UUIDs here:
  const newUuids = new Array(fileInstances.length);

  /**********************************************
   * 2A) Build an array of Promises, each one:
   *    - tracks progress
   *    - resolves on successful upload
   *    - rejects on failure
   **********************************************/
  const uploadPromises = fileInstances.map((fileInstance, idx) => {
  return new Promise((resolve, reject) => {
    fileInstance
      .done((fileInfo) => {
        newUuids[idx] = fileInfo.uuid;   // keep selection order
        resolve(fileInfo);
      })
      .fail((errorType, fileInfo, error) => {
        if (errorType === "user") return reject({ canceled: true });
        reject({ errorType, fileInfo, error });
      });
  });
});

  /**********************************************
   * 2B) Wait for all files to finish (success or fail)
   **********************************************/
  try {
    await Promise.all(uploadPromises);

    // If we get here, **all** files have uploaded successfully.
    // Update your store with the new UUIDs:
    if (!store[blockId]) {
      store[blockId] = [];
    }
   store[blockId] = [...(store[blockId] || []), ...newUuids.filter(Boolean)];

  } catch (anyError) {
    console.error("One or more files failed to upload for blockId:", blockId, anyError);
  }

  // Hide loader, remove "uploading" class
  if (blockEl) {
    blockEl.classList.remove("uploading");
    const loaderLine = blockEl.querySelector(".loader-line");
    if (loaderLine) loaderLine.classList.remove("visible");
  }

   // **Important**: Clear the input to allow re-selecting the same file
  input.value = "";

  // (Re)save to session
  saveSessionData();

  // Update UI counters, etc.
  updateRequiredFields();
  validateForm();
  setCartProperties(); // if form is valid, enable buttons, etc.
}


/**
 * Refactored setCurrentUuids Function
 * 
 * Instead of replacing the entire `store`, we'll ensure that we're merging updates safely.
 */
function setCurrentUuids() {
  const storedData = sessionStorage.getItem(sessionStorageKey);
  if (storedData !== null) {
    try {
      const uploadcareData = JSON.parse(storedData);
      if (uploadcareData.store && typeof uploadcareData.store === 'object') {
        // Merge the existing store with the stored data
        store = { ...store, ...uploadcareData.store };
      }
    } catch (error) {
      console.error("Error parsing session storage data:", error);
      // If parsing fails, consider clearing the store to avoid inconsistencies
      store = {};
    }
  }
}

/**
 * Refactored saveSessionData Function
 * 
 * We'll ensure that we're saving the current `store` object without overwriting during concurrent uploads.
 */
let isSaving = false;

function saveSessionData() {
  if (isSaving) {
    // Optionally, queue the save operation or skip to prevent conflicts
    console.warn("Save operation is already in progress.");
    return;
  }

  isSaving = true;

  const uploadcareData = {
    form: sessionStorageKey,
    store: { ...store }, // Spread to ensure immutability
    collection: currentCollectionID,
  };
  try {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(uploadcareData));
  } catch (error) {
    console.error("Error saving to session storage:", error);
  } finally {
    isSaving = false;
  }
}

function updateRequiredFields() {
  const MAX_FILES_PER_BLOCK = 3;

  Object.keys(store).forEach((key) => {
    const counterID = `counter-tab-${key}`;
    const counterElement = document.getElementById(counterID);
    const tabElement = document.getElementById(key);
    const count = store[key].length || 0;

    if (counterElement) {
      counterElement.innerText = count || "";
    }

    if (tabElement) {
      if (count > 0) {
        tabElement.classList.add("uploaded");
      } else {
        tabElement.classList.remove("uploaded");
      }

      if (count === MAX_FILES_PER_BLOCK) {
        tabElement.classList.add("uploaded--all");
      } else {
        tabElement.classList.remove("uploaded--all");
      }
    }
  });
}


function validateForm() {
  formIsValid = true;
  // Grab the currently active tab's required blocks:
  let currentTab = document.getElementById(`tab-${currentCollectionID}`);
  if (!currentTab) return;

  let requiredBlocks = currentTab.querySelectorAll(".item-required");
  requiredBlocks.forEach((el) => {
    if (!el.classList.contains("uploaded")) {
      formIsValid = false;
    }
  });
}

function setCartProperties() {
  if (!formIsValid) return;

  // 1) Clear existing hidden inputs first
  if (uploaderContainer) {
    uploaderContainer.innerHTML = "";
  }

  // 2) Insert _Category
  const collectionValue = productType
    ? `${currentCollectionID}-${productType}`
    : currentCollectionID;

  createAndAppendInput(
  "properties[_Category]",
  `property-${currentCollectionID}`,
  collectionValue
);

  // 3) For each block in `store`, build hidden inputs, remove "currentCollectionID" part from the key
  Object.keys(store).forEach((blockId) => {
    if (store[blockId].length > 0) {
      let i = 1;
      store[blockId].forEach((uuid) => {
        const url = `https://ucarecdn.com/${uuid}/`;

        // E.g. blockId = "sneakers-hype_overall-picture"
        // We remove "sneakers-hype" or "bag" etc. from the front:
        // (Feel free to adjust the exact string logic if your blockId differs)
        let propertyName = blockId.replace(`${currentCollectionID}_`, "");

        // => "_overall-picture_1"
        // If you want that exact style, do:
        propertyName = `_${propertyName}_${i}`;

        // Now create a hidden input with that name
        createAndAppendInput(
          `properties[${propertyName}]`,
          uuid,    // as the <input id=...> so it’s unique
          url
        );
        i++;
      });
    }
  });

  updateButtonStates(false, "Uploaded");
}

function createAndAppendInput(name, id, value) {
  if (!uploaderContainer) return;

  const safeId = `${id}--${productID}`; // make unique per product instance
  if (!uploaderContainer.querySelector(`#${CSS.escape(safeId)}`)) {
    const input = document.createElement("input");
    input.name = name;
    input.id = safeId;
    input.value = value;
    input.type = "hidden";
    uploaderContainer.appendChild(input);
  }
}

function updateButtonStates(isDisabled, text) {
  const action = isDisabled ? "add" : "remove";
  if (isFormCart) {
    uploadcareCartButton.classList[action]("disabled");
  } else {
    uploadSubmit.classList[action]("disabled");
  }
  openDialogButtons.forEach((btn) => (btn.innerText = text));
}

function resetUploaderData() {
  // Clear store and session
  formIsValid = false;
  store = {};
  sessionStorage.removeItem(sessionStorageKey);

  if (isFormCart) {
    uploadcareCartButton.classList.add("disabled");
  } else if (uploadSubmit) {
    uploadSubmit.classList.add("disabled");
  }
}

// Close popup
document.querySelector(".popup-btn__close").addEventListener("click", () => {
  closeDialog();
});

// Update variantID
const productForms = Array.from(
  document.getElementsByClassName("product-form"),
);

if (!document.querySelector(".option-container")) {
  productForms.forEach((form) => {
    form.addEventListener("change", (event) => {
      variantID = event.target.value;
    });
  });
}

// Non-cart submission just closes popup:
if (!isFormCart && uploadSubmit) {
  uploadSubmit.addEventListener("click", () => {
    // If you'd like to do a final check:
    // if(formIsValid) { ... } else { ... }
    closeDialog();
  });
}

// For form-cart submission:
function prepareLineItemProperties(variantID) {
  const properties = {};

  const inputs = uploaderContainer.querySelectorAll(
    'input[name^="properties["]'
  );

  if (!inputs.length) {
    throw new Error("No upload properties found");
  }

  inputs.forEach((input) => {
    const name = input.name.match(/\[(.*?)\]/)[1];
    properties[name] = input.value;
  });

  return {
    items: [{ id: variantID, quantity: 1, properties }],
  };
}


function setVariantIDmultiplyOptions() {
  if (document.querySelector(".option-container")) {
    variantID = document.getElementById(
      "selected-options-values--" + productID
    ).dataset.variant;
  }
}

// DataLayer example usage:
let cartPrice = "";
let cartTime = "";
let cartTitle = "";

window.dataLayer = window.dataLayer || [];

async function addToCart() {
  await setVariantIDmultiplyOptions();
  let formData;

  try {
    formData = prepareLineItemProperties(variantID);

    const props = formData.items[0].properties;
    if (!props || Object.keys(props).length === 0) {
      throw new Error("Empty properties");
    }
  } catch (e) {
    console.error("Add to cart blocked:", e);
    alert("Upload required photos before checkout");
    return;
  }

  // For Google Tag
  let selectedVariantData = productData.variants.find(
    (variant) => variant.id == variantID
  );
  cartPrice = selectedVariantData.price / 100;
  cartTime = selectedVariantData.public_title;
  cartTitle = selectedVariantData.name;

  window.dataLayer.push({
    event: "purchase",
    ecommerce: {
      transaction_id: variantID,
      value: cartPrice,
      currency: Shopify.currency.active,
      items: [
        {
          item_name: cartTitle,
          item_id: variantID,
          price: cartPrice,
          item_variant: cartTime,
        },
      ],
    },
  });

  console.log("Submitting properties:", formData.items[0].properties);
  postCartData(formData);
}

function isUploadInProgress() {
  return activeFileInstances.some(inst => inst.state() === 'uploading');
}

function validateFormStrict() {
  let valid = true;
  let currentTab = document.getElementById(`tab-${currentCollectionID}`);
  if (!currentTab) return false;

  let requiredBlocks = currentTab.querySelectorAll(".item-required");

  requiredBlocks.forEach((el) => {
    const blockId = el.dataset.blockId;
    if (!store[blockId] || store[blockId].length === 0) {
      valid = false;
    }
  });

  return valid;
}

if (isFormCart && uploadcareCartButton) {
  uploadcareCartButton.addEventListener("click", async (event) => {
    event.preventDefault();

    if (isUploadInProgress()) {
      alert("Please wait until all photos are uploaded");
      return;
    }

    if (!validateFormStrict()) {
      alert("Please upload all required photos");
      return;
    }

    setCartProperties();
    addToCart();
  });
}

/* Initialize everything */
initOpenDialogButtons();