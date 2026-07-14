import Image from "next/image";
import Script from "next/script";

const products = [
  {
    name: "Gul 900 Gladiator Unstitched Fabric",
    description:
      "An off-white unstitched wash-and-wear fabric with a clean, classic finish for refined daily dressing.",
    price: "Rs. 3,983",
    image:
      "https://www.gulahmedshop.com/cdn/shop/files/gul-900-gladiator-sm8482-unstitched-fabric-washnwear-off-white--fullshot-front_940x.jpg?v=1779365314",
  },
  {
    name: "Regular Fit Styling Waist Coat",
    description:
      "A grey blended waistcoat with a structured regular fit for polished eastern layering.",
    price: "Rs. 9,990",
    image:
      "https://www.gulahmedshop.com/cdn/shop/files/Men-Waist-Coat-Color-Grey-Blended-Regular-Fit-WC-STY25-021-Half-Front_940x.jpg?v=1778842860",
  },
  {
    name: "Coffee Brown Basic Suit",
    description:
      "A rich coffee-brown blended suit with minimal styling and a comfortable regular-fit silhouette.",
    price: "Rs. 4,790",
    image:
      "https://www.gulahmedshop.com/cdn/shop/files/Men-Suits-Color-Coffee-Brown-Blended-Regular-Fit-SK-FRIBC26-010-Half-Front_940x.jpg?v=1778842846",
  },
  {
    name: "Fawn 3 Piece Styling Suit",
    description:
      "A fawn three-piece suit with a coordinated waistcoat, made for festive and dressed-up moments.",
    price: "Rs. 16,990",
    image:
      "https://www.gulahmedshop.com/cdn/shop/files/Men-3-Pcs-Suits-Color-Fawn-Blended-Regular-Fit-SK-WCS26-009-Half-Front_940x.jpg?v=1778842806",
  },
];

const heroCategories = [
  {
    label: "Unstitched",
    image:
      "https://www.gulahmedshop.com/cdn/shop/collections/men-ready-to-wear_210x.webp.jpg?v=1759749380",
  },
  {
    label: "Ready-to-Wear",
    image:
      "https://www.gulahmedshop.com/cdn/shop/collections/men-ready-to-wear_9560ba0b-0da7-4138-8536-0f9ccb567161_210x.webp.jpg?v=1759749218",
  },
  {
    label: "Shoes Men",
    image:
      "https://www.gulahmedshop.com/cdn/shop/collections/shoes-men_210x.webp.jpg?v=1759749244",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-neutral-950">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex justify-center">
          <Image
            src="https://www.gulahmedshop.com/cdn/shop/files/ideas_logo_300x.webp?v=1758102474"
            alt="Ideas by Gul Ahmed"
            width={150}
            height={30}
            priority
          />
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-2xl shadow-neutral-300/60">
          <div className="grid items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-lime-300">
                Men&apos;s Edit
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                A simplified try-on landing page for classic menswear.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-neutral-300 sm:text-lg">
                Browse four featured pieces inspired by the Gul Ahmed men&apos;s
                collection, then start a virtual styling flow from each card.
              </p>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-lime-200 via-stone-100 to-white p-6">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/70 blur-2xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-stone-300/70 blur-3xl" />
              <div className="relative grid h-full min-h-68 grid-cols-3 items-end gap-4">
                {heroCategories.map((category, index) => (
                  <div
                    className={`overflow-hidden rounded-full bg-white p-2 shadow-2xl shadow-neutral-900/10 ${
                      index === 1 ? "mb-10" : ""
                    }`}
                    key={category.label}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-full">
                      <Image
                        src={category.image}
                        alt={category.label}
                        fill
                        priority={index === 1}
                        className="object-cover"
                        sizes="(min-width: 1024px) 160px, 28vw"
                      />
                    </div>
                    <p className="mt-3 pb-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-neutral-800">
                      {category.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section aria-labelledby="featured-products">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-700">
                Featured
              </p>
              <h2
                id="featured-products"
                className="mt-2 text-3xl font-semibold tracking-tight"
              >
                Four products to try on
              </h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <article
                className="group overflow-hidden rounded-[1.5rem] bg-white shadow-lg shadow-neutral-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-neutral-300/80"
                key={product.name}
              >
                <div className="relative h-96 bg-stone-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex min-h-72 flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-lg font-semibold">{product.price}</p>
                    <button
                      className="js-try-on-button rounded-full bg-lime-500 px-5 py-3 text-sm font-bold text-neutral-950 transition hover:bg-lime-400 focus:outline-none focus:ring-4 focus:ring-lime-300"
                      data-description={product.description}
                      data-image={product.image}
                      data-name={product.name}
                      data-price={product.price}
                      type="button"
                    >
                      Try On
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      <div
        aria-modal="true"
        className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        id="try-on-modal"
        role="dialog"
      >
        <div className="max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-[2rem] bg-[#f6f3ed] p-5 shadow-2xl sm:p-8">
          <div className="mb-6 flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-700">
                Virtual Try On
              </p>
              <h2
                className="mt-2 text-3xl font-semibold tracking-tight"
                id="try-on-title"
              >
                Try this product
              </h2>
            </div>
            <button
              aria-label="Close try on modal"
              className="js-try-on-close rounded-full bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:bg-neutral-100"
              type="button"
            >
              Close
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white p-4 shadow-lg shadow-neutral-200/80">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Garment
                  </p>
                  <div
                    aria-label="Selected garment preview"
                    className="h-96 overflow-hidden rounded-[1.25rem] bg-stone-100 bg-cover bg-top"
                    id="try-on-garment-preview"
                    role="img"
                  />
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="font-semibold" id="try-on-product-name">
                      Product
                    </p>
                    <p className="font-bold" id="try-on-product-price">
                      Price
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.5rem] bg-white p-4 shadow-lg shadow-neutral-200/80">
                  <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Customer Photo
                  </p>
                  <label className="flex h-96 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border-2 border-dashed border-lime-300 bg-lime-50/60 text-center transition hover:border-lime-500 hover:bg-lime-50">
                    {/* Uploaded blob previews should keep their original aspect ratio by height. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Customer photo preview"
                      className="hidden h-full w-auto max-w-full object-contain"
                      id="try-on-customer-preview"
                    />
                    <span className="max-w-xs px-6" id="try-on-upload-empty">
                      <span className="block text-5xl">+</span>
                      <span className="mt-4 block text-xl font-semibold">
                        Upload your photo
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-neutral-600">
                        Use a clear front-facing photo for better try-on
                        results.
                      </span>
                    </span>
                    <input
                      accept="image/*"
                      className="sr-only"
                      id="try-on-file-input"
                      type="file"
                    />
                  </label>
                </div>
              </div>

              <button
                className="mt-4 w-full rounded-full bg-neutral-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
                disabled
                id="try-on-generate"
                type="button"
              >
                Generate Try-On
              </button>
            </div>

            <div className="rounded-[1.5rem] bg-white p-4 shadow-lg shadow-neutral-200/80">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                Generated Result
              </p>
              <div className="flex min-h-[32rem] items-center justify-center overflow-hidden rounded-[1.25rem] bg-neutral-950/95 p-4 text-center text-white">
                <div className="max-w-xs" id="try-on-result-empty">
                  <p className="text-4xl">+</p>
                  <p className="mt-4 text-xl font-semibold">
                    Result will appear here
                  </p>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    Upload a customer photo, then generate the virtual try-on to
                    compare the output beside your inputs.
                  </p>
                </div>
                <div className="hidden max-w-xs" id="try-on-loader">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-lime-400" />
                  <p className="mt-5 text-xl font-semibold">
                    Generating try-on
                  </p>
                  <p
                    className="mt-2 text-sm leading-6 text-neutral-300"
                    id="try-on-loader-detail"
                  >
                    Starting IDM-VTON...
                  </p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Generated try-on result"
                  className="hidden max-h-[32rem] w-auto max-w-full rounded-[1.25rem] object-contain"
                  id="try-on-result"
                />
              </div>
              <p
                className="mt-3 hidden rounded-2xl bg-lime-100 p-4 text-sm font-medium leading-6 text-lime-950"
                id="try-on-status"
              />
            </div>
          </div>
        </div>
      </div>

      <Script id="try-on-modal-script" strategy="afterInteractive">
        {`
          (() => {
            const modal = document.getElementById("try-on-modal");
            const title = document.getElementById("try-on-title");
            const garmentPreview = document.getElementById("try-on-garment-preview");
            const productName = document.getElementById("try-on-product-name");
            const productPrice = document.getElementById("try-on-product-price");
            const fileInput = document.getElementById("try-on-file-input");
            const customerPreview = document.getElementById("try-on-customer-preview");
            const uploadEmpty = document.getElementById("try-on-upload-empty");
            const generateButton = document.getElementById("try-on-generate");
            const status = document.getElementById("try-on-status");
            const resultImage = document.getElementById("try-on-result");
            const resultEmpty = document.getElementById("try-on-result-empty");
            const loader = document.getElementById("try-on-loader");
            const loaderDetail = document.getElementById("try-on-loader-detail");
            let timer = null;
            let customerPhotoUrl = null;
            let selectedCustomerFile = null;
            let selectedGarment = {
              description: "",
              image: "",
              name: "",
            };

            if (!modal || !title || !garmentPreview || !productName || !productPrice || !fileInput || !customerPreview || !uploadEmpty || !generateButton || !status || !resultImage || !resultEmpty || !loader || !loaderDetail) {
              return;
            }

            const stopTimer = () => {
              if (timer) {
                window.clearInterval(timer);
                timer = null;
              }
            };

            const setStatus = (message, tone = "info") => {
              status.textContent = message;
              status.classList.remove("hidden", "bg-lime-100", "text-lime-950", "bg-red-100", "text-red-950", "bg-neutral-100", "text-neutral-800");

              if (tone === "error") {
                status.classList.add("bg-red-100", "text-red-950");
              } else if (tone === "done") {
                status.classList.add("bg-lime-100", "text-lime-950");
              } else {
                status.classList.add("bg-neutral-100", "text-neutral-800");
              }
            };

            const resetCustomerPhoto = () => {
              if (customerPhotoUrl) {
                URL.revokeObjectURL(customerPhotoUrl);
                customerPhotoUrl = null;
              }

              fileInput.value = "";
              selectedCustomerFile = null;
              customerPreview.removeAttribute("src");
              customerPreview.classList.add("hidden");
              uploadEmpty.classList.remove("hidden");
              generateButton.disabled = true;
              generateButton.textContent = "Generate Try-On";
              status.textContent = "";
              status.classList.add("hidden");
              loader.classList.add("hidden");
              loaderDetail.textContent = "Starting IDM-VTON...";
              resultImage.removeAttribute("src");
              resultImage.classList.add("hidden");
              resultEmpty.classList.remove("hidden");
              stopTimer();
            };

            const closeModal = () => {
              modal.classList.add("hidden");
              modal.classList.remove("flex");
              resetCustomerPhoto();
            };

            document.querySelectorAll(".js-try-on-button").forEach((button) => {
              button.addEventListener("click", () => {
                const name = button.getAttribute("data-name") || "this product";
                const price = button.getAttribute("data-price") || "";
                const image = button.getAttribute("data-image") || "";
                const description = button.getAttribute("data-description") || name;
                selectedGarment = { description, image, name };

                title.textContent = "Try " + name;
                productName.textContent = name;
                productPrice.textContent = price;
                garmentPreview.style.backgroundImage = image ? "url('" + image + "')" : "";
                modal.classList.remove("hidden");
                modal.classList.add("flex");
              });
            });

            document.querySelectorAll(".js-try-on-close").forEach((button) => {
              button.addEventListener("click", closeModal);
            });

            modal.addEventListener("click", (event) => {
              if (event.target === modal) {
                closeModal();
              }
            });

            window.addEventListener("keydown", (event) => {
              if (event.key === "Escape" && !modal.classList.contains("hidden")) {
                closeModal();
              }
            });

            fileInput.addEventListener("change", () => {
              const file = fileInput.files && fileInput.files[0];

              if (!file) {
                resetCustomerPhoto();
                return;
              }

              if (customerPhotoUrl) {
                URL.revokeObjectURL(customerPhotoUrl);
              }

              selectedCustomerFile = file;
              customerPhotoUrl = URL.createObjectURL(file);
              customerPreview.setAttribute("src", customerPhotoUrl);
              customerPreview.classList.remove("hidden");
              uploadEmpty.classList.add("hidden");
              generateButton.disabled = false;
              generateButton.textContent = "Generate Try-On";
              status.textContent = "";
              status.classList.add("hidden");
              loader.classList.add("hidden");
              resultImage.removeAttribute("src");
              resultImage.classList.add("hidden");
              resultEmpty.classList.remove("hidden");
              stopTimer();
            });

            generateButton.addEventListener("click", async () => {
              const file = selectedCustomerFile;

              if (!file) {
                setStatus("Please upload a customer photo first.", "error");
                return;
              }

              if (!selectedGarment.image) {
                setStatus("Please select a garment first.", "error");
                return;
              }

              const requestBody = new FormData();
              requestBody.append("human_img", file);
              requestBody.append("garm_img", selectedGarment.image);
              requestBody.append("garment_des", selectedGarment.description || selectedGarment.name);

              generateButton.disabled = true;
              generateButton.textContent = "Generating...";
              resultImage.removeAttribute("src");
              resultImage.classList.add("hidden");
              resultEmpty.classList.add("hidden");
              loader.classList.remove("hidden");
              loaderDetail.textContent = "Submitting to IDM-VTON...";
              setStatus("Submitting request to Replicate. Typical generation time is around 20-60 seconds.");

              const startedAt = Date.now();
              stopTimer();
              timer = window.setInterval(() => {
                const seconds = Math.floor((Date.now() - startedAt) / 1000);
                const phase = seconds < 10
                  ? "Uploading image and starting prediction"
                  : seconds < 35
                    ? "Model is generating the outfit"
                    : "Still working, cold starts can take longer";
                loaderDetail.textContent = phase + " • " + seconds + "s elapsed";
              }, 1000);

              try {
                const response = await fetch("/api/try-on", {
                  method: "POST",
                  body: requestBody,
                });
                const payload = await response.json();

                if (!response.ok) {
                  throw new Error(payload.error || "Try-on generation failed.");
                }

                resultImage.setAttribute("src", payload.imageUrl);
                resultImage.classList.remove("hidden");
                resultEmpty.classList.add("hidden");
                loader.classList.add("hidden");
                setStatus("Done. Here is the generated try-on result.", "done");
              } catch (error) {
                loader.classList.add("hidden");
                resultEmpty.classList.remove("hidden");
                setStatus(error instanceof Error ? error.message : "Try-on generation failed.", "error");
              } finally {
                stopTimer();
                generateButton.disabled = false;
                generateButton.textContent = "Generate Try-On";
              }
            });
          })();
        `}
      </Script>
    </main>
  );
}
