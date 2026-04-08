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
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      window.document.location.href = "/cart/checkout";
    })
    .catch((error) => {
      console.error("Post to cart error:", error);
    });
}

// Function to lazy load images
function lazyLoadImages() {
    const activeTab = document.querySelector('.tab-section.tab-active');
    if (!activeTab) return;

    const images = activeTab.querySelectorAll('.tab-section__image');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                const src = image.getAttribute('data-src');
                if (src) {
                    image.style.backgroundImage = `url(${src})`;
                    observer.unobserve(image);
                }
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
}

// Call the lazyLoadImages function initially
lazyLoadImages();

// Update lazy loading when the active tab changes
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-section').forEach(tab => {
        tab.addEventListener('transitionend', () => {
            if (tab.classList.contains('tab-active')) {
                lazyLoadImages();
            }
        });
    });
});

/* DIALOG */
const formDialog = document.querySelector(".popup-container");
const overlay = document.querySelector(".popup-overlay");
const ANIMATION_TIME = 350;
const tabs = document.querySelector(".tabs");

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
  resetTabs();
  resetRequiredPhotosState();
  resetStore(); // Reset store
  toggleSubmitButton(); // Update button state

  formDialog.classList.add("transparent");
  overlay.classList.add("hiding");

  setTimeout(() => {
    document.body.classList.remove("popup-page");
    overlay.classList.remove("hiding", "open");
    overlay.classList.add("hidden");
  }, ANIMATION_TIME);
}

document.querySelector(".popup-btn__close").addEventListener("click", () => {
  closeDialog();
});

function setFormStyles(isFormCart) {
  if (isFormCart) {
    document.querySelectorAll(".uploadcare").forEach((el) => {
      el.style.order = "6";
    });
    hideElements(".custom-cart-button");
    hideElements(".product_card-btns");
    hideElements(".product_checkout-btns");
  }
}

function resetTabs() {
  // Loop through all the tab-section__content elements
  const tabSections = document.querySelectorAll(".tab-section__content");
  tabSections.forEach((tabSection) => {
    // Reset styles
    tabSection.querySelector(".tab-section__image").style.display = "";
    tabSection.querySelector(".tab-section__image-success").style.visibility =
      "hidden";
    tabSection.querySelector(".tab-section__image-reject").style.visibility =
      "hidden";

    // Reset input value
    tabSection.querySelector(".file-input-fast-check").value = "";
  });

  const tooltips = document.querySelectorAll(".tooltip-fast");
  tooltips.forEach((tooltip) => {
    // Reset styles
    tooltip.style.display = "none";
  });
}

function updateTabAndTip(tab) {
  toggleClass(document.querySelector(".tab-active"), "tab-active");
  toggleClass(document.getElementById(`tab-${tab}`), "tab-active");
}

// Function to update tabs height
function updateTabsHeight() {
  const tabs = document.querySelector(".tabs");
  const activeTab = tabs.querySelector(".tab-active");
  tabs.style.height = `${activeTab.clientHeight}px`;
}

// Update tabs height when the window is resized
window.addEventListener("resize", updateTabsHeight);

function switchTabs(item, model) {
  // Update the active item
  updateTabAndTip(item);

  // Hide all model blocks
  const modelBlocks = document.querySelectorAll("[id^='additional-step-']");
  modelBlocks.forEach((block) => {
    block.classList.add("hidden");
  });

  // Show the models for the selected item
  const selectedItemType = document.querySelector(
    `input[name='types']:checked`
  ).id;
  const selectedModelBlock = document.getElementById(
    `additional-step-${selectedItemType}`
  );
  selectedModelBlock.classList.remove("hidden");

  // Select the first model as default if no model is provided
  if (!model) {
    const modelSelect = document.getElementById(`${selectedItemType}_model`);
    modelSelect.selectedIndex = 0; // Select first model as default

    // Show indexes for the selected model
    const selectedModelID = modelSelect.value;
    document
      .getElementById(`tab-${item}_${selectedModelID}`)
      .classList.add("tab-active");
  } else {
    // If a model is provided, update the tabs accordingly
    const selectedModelID = model;
    document
      .getElementById(`tab-${item}_${selectedModelID}`)
      .classList.add("tab-active");
  }

  // Reset the uploaded images and counters
  document.querySelectorAll(".uploaded").forEach((block) => {
    block.classList.remove("uploaded");
    block.querySelector(".tab-section__counter").innerHTML = "";
  });

  // Update tabs height
  tabs.style.height = `${tabs.querySelector(".tab-active").clientHeight}px`;
}

// Function to Check if All Required Photos for Active Tab are Accepted
function areAllRequiredPhotosAccepted() {
  const activeTabId = document.querySelector(".tab-active").id;
  const activeTabInputs = document.querySelectorAll(
    `#${activeTabId} .file-input-fast-check`
  );

  for (const input of activeTabInputs) {
    const pointId = input.id.split("_")[2];

    if (
      input.hasAttribute("required") &&
      (!store[pointId] || !store[pointId].accepted)
    ) {
      return false;
    }
  }
  return true;
}

// Function to Enable/Disable Submit Button
function toggleSubmitButton() {
  const submitButton = document.getElementById("upladcare-cart");
  if (areAllRequiredPhotosAccepted()) {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled"); // Remove the 'disabled' class
  } else {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("disabled"); // Add the 'disabled' class
  }
}

// Function to Reset Required Photos State
function resetRequiredPhotosState() {
  const requiredPhotoInputs = document.querySelectorAll(
    ".tab-active .file-input-fast-check.required"
  );
  for (const input of requiredPhotoInputs) {
    const pointId = input.id.split("_")[2];
    if (store[pointId]) {
      store[pointId].accepted = false;
      delete store[pointId]; // Remove from store
    }
  }
}

// Event listener for item selection
document.querySelectorAll("input[name='types']").forEach((input) => {
  input.addEventListener("change", (event) => {
    resetTabs();
    resetRequiredPhotosState();
    resetStore(); // Reset store
    toggleSubmitButton(); // Update button state

    const selectedItem = event.target.id;
    switchTabs(selectedItem, null);
  });
});

// Event listener for model selection
document.querySelectorAll(".select-option-model select").forEach((select) => {
  select.addEventListener("change", (event) => {
    resetTabs();
    resetRequiredPhotosState();
    resetStore(); // Reset store
    toggleSubmitButton(); // Update button state

    const selectedItem = document.querySelector(
      "input[name='types']:checked"
    ).id;
    const selectedModel = event.target.value;
    switchTabs(selectedItem, selectedModel);
  });
});

const dataProductContainer = document.querySelector(
  ".uploadcare-product-hidden"
);

const productData = JSON.parse(dataProductContainer.dataset.product);

let store = {};

// Function to reset the store object
function resetStore() {
  store = {};
}

let isFormCart = document
  .getElementById("product-uploads")
  .classList.contains("form-cart");
let variantID = document.getElementById("selected-variant").value;

setFormStyles(isFormCart);

const uploadcareCartButton = document.getElementById("upladcare-cart");

// Function to send accepted photo IDs to check-photos endpoint
async function checkAcceptedPhotos(photoIds) {
  const timeoutDuration = 60 * 1000; // 1 minute in milliseconds

  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("Request timed out"));
      }, timeoutDuration);
    });

    // Create a promise for the fetch request
    const fetchPromise = fetch("https://lpnz0wbgr7.execute-api.eu-west-2.amazonaws.com/1/check-photos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(photoIds), // Sending an array of photo IDs
    });

    // Race the fetch promise against the timeout promise
    const response = await Promise.race([fetchPromise, timeoutPromise]);

    // Return the response from the server
    return response;
  } catch (error) {
    throw new Error("Timeout error checking photos");
  }
}

// Send image to new API after it's loaded in input type="file" with
const uploadBlocks = document.querySelectorAll(".file-input-fast-check");

uploadBlocks.forEach((input) => {
  input.addEventListener("change", async (e) => {
    const imageContainer = e.target
      .closest("label")
      .querySelector(".tab-section__image-container");

    const tooltip = e.target
      .closest("label")
      .querySelector(`.tooltip-fast-error`);
    const tooltipSize = e.target
      .closest("label")
      .querySelector(`.tooltip-fast-size`);

    // Disable the input
    e.target.disabled = true;

    // Hide both success and reject images
    imageContainer.querySelector(
      ".tab-section__image-success"
    ).style.visibility = "hidden";
    imageContainer.querySelector(
      ".tab-section__image-reject"
    ).style.visibility = "hidden";
    tooltip.style.display = "none";
    tooltipSize.style.display = "none";

    // Show loader
    const loaderLine = e.target.closest("label").querySelector(`.loader-line`);
    loaderLine.style.opacity = "1";

    const file = e.target.files[0];
    const pointId = e.target.id.split("_")[2];

    // Check file size
    // if (file.size > 5 * 1024 * 1024) {
    //   // File size exceeds 5MB, display tooltip and reject image
    //   tooltipSize.style.display = "block";
    //   imageContainer.querySelector(
    //     ".tab-section__image-reject"
    //   ).style.visibility = "visible";
    //   loaderLine.style.opacity = "0";

    //   // Re-enable the input after processing
    //   e.target.disabled = false;

    //   return;
    // }

    try {
      // Step 1: Send request to /submit-photo to get id and pre_signed_url
      const submitPhotoResponse = await fetch(
        "https://lpnz0wbgr7.execute-api.eu-west-2.amazonaws.com/1/submit-photo",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ point_id: pointId }),
        }
      );

      if (!submitPhotoResponse.ok) {
        throw new Error("Error getting url for photo");
      }

      const submitPhotoData = await submitPhotoResponse.json();
      const photoId = submitPhotoData.id;
      const preSignedUrl = submitPhotoData.pre_signed_url;

      // Step 2: Send photo file to pre_signed_url
      const uploadPhotoResponse = await fetch(preSignedUrl, {
        method: "PUT",
        body: file,
      });

      if (!uploadPhotoResponse.ok) {
        throw new Error("Error uploading photo");
      }

      // Step 3: Check if the photo is accepted or not
      const checkPhotoResponse = await checkAcceptedPhotos([photoId]);

      // Check if the response is successful
      if (!checkPhotoResponse.ok) {
        throw new Error("Error checking photo");
      }

      // Parse the response JSON
      const checkPhotoData = await checkPhotoResponse.json();

      // Access the relevant data from the response
      const photoAcceptable = checkPhotoData[0].acceptable;

      // Hide loader
      loaderLine.style.opacity = "0";

      if (!photoAcceptable) {
        // Show reject image div
        imageContainer.querySelector(
          ".tab-section__image-reject"
        ).style.visibility = "visible";
        tooltip.style.display = "block";

        delete store[pointId]; // Remove from store

        toggleSubmitButton(); // Update button state
      } else {
        // Show success image div and save ID to Shopify form
        imageContainer.querySelector(
          ".tab-section__image-success"
        ).style.visibility = "visible";
        tooltip.style.display = "none";
        tooltipSize.style.display = "none";

        store[pointId] = { pointId: pointId, photoId: photoId, accepted: true };

        toggleSubmitButton(); // Check if all required photos are accepted after uploading
      }
    } catch (error) {
      // Hide loader
      loaderLine.style.opacity = "0";

      // Show reject image div
      imageContainer.querySelector(
        ".tab-section__image-reject"
      ).style.visibility = "visible";
      tooltipSize.style.display = "block";

      delete store[pointId]; // Remove from store

      toggleSubmitButton(); // Update button state

      console.error("Error uploading image:", error);
    } finally {
      // Re-enable the input after processing
      e.target.disabled = false;
    }

    e.target.value = ""; // Turn off if we need 'browser optimization sent' (don't send request if file is the same)
  });
});

function setVariantIDmultiplyOptions() {
  if (document.querySelector(".option-container")) {
    variantID = document.getElementById("selected-options-values--" + productID)
      .dataset.variant;
  }
}

let formData = {};
let selectedItemInfo;
let selectedModelInfo;

// Function to set selected item info
function setSelectedItemInfo() {
  const checkedInput = document.querySelector("input[name='types']:checked");
  if (checkedInput) {
    const labelElement = checkedInput.parentElement;
    const spanElement = labelElement.querySelector("span");
    selectedItemInfo = {
      id: checkedInput.id,
      name: spanElement.textContent.trim(),
    };
  }
}

function setSelectedModelInfo() {
  const selectedOption = document.querySelector(
    ".select-option-model select option:checked"
  );
  if (selectedOption) {
    selectedModelInfo = {
      id: selectedOption.value,
      name: selectedOption.textContent.trim(),
    };
  }
}

function prepareLineItemProperties(variantID) {
  const properties = {};

  for (const pointId in store) {
    if (store.hasOwnProperty(pointId) && store[pointId].accepted) {
      properties["_" + pointId] = store[pointId].photoId;
    }
  }

  formData = {
    items: [
      {
        id: variantID,
        quantity: 1,
        properties: properties,
      },
    ],
  };

  setSelectedItemInfo();
  setSelectedModelInfo();

  // Add selected item info
  properties["_Category"] = selectedItemInfo.name;
  properties["_CategoryId"] = selectedItemInfo.id;

  // Add selected model info
  properties["_Model"] = selectedModelInfo.name;
  properties["_ModelId"] = selectedModelInfo.id;
}

let cartPrice = "";
let cartTime = "";
let cartTitle = "";

window.dataLayer = window.dataLayer || [];

async function addToCart() {
  await setVariantIDmultiplyOptions();
  await prepareLineItemProperties(variantID);

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

  const photoIds = Object.values(store).map((obj) => obj.photoId);

  checkAcceptedPhotos(photoIds);

  postCartData(formData);
}

if (isFormCart) {
  uploadcareCartButton.addEventListener("click", (event) => {
    event.preventDefault();

    let selectedVariantData = productData.variants.find(
      (variant) => variant.id == variantID
    );

    cartPrice = selectedVariantData.price / 100;
    cartTitle = selectedVariantData.name;
    cartTime = selectedVariantData.public_title;

    addToCart();
  });
}

initOpenDialogButtons();
