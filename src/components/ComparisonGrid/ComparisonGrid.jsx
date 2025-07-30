import React from "react";
import { Link } from "react-router-dom";
import styles from "./ComparisonGrid.module.css";

// --- Data for Different Product Pages ---

const ipadData = [
  {
    name: "iPad Pro",
    image: "/images/compare/ipad-pro.png",
    description:
      "The ultimate iPad experience with the most advanced technology.",
    price: "From $999",
    specs: [
      { icon: null, label: "13” or 11” <br/> Ultra Retina XDR display" },
      { icon: "/images/icons/specs/m4.svg", label: "M4 chip" },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
    ],
  },
  {
    name: "iPad Air",
    image: "/images/compare/ipad-air.png",
    description: "Serious performance in a thin and light design.",
    price: "From $599",
    specs: [
      { icon: null, label: "13” or 11” <br/> Liquid Retina display" },
      { icon: "/images/icons/specs/m2.svg", label: "M2 chip" },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
    ],
  },
  {
    name: "iPad",
    image: "/images/compare/ipad-10th.png",
    description:
      "The colorful, all-screen iPad for the things you do every day.",
    price: "From $349",
    specs: [
      { icon: null, label: "10.9” <br/> Liquid Retina display" },
      { icon: "/images/icons/specs/a14.svg", label: "A14 Bionic chip" },
      {
        icon: "/images/icons/specs/pencil-usbc.svg",
        label: "Supports Apple Pencil (USB-C)",
      },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
    ],
  },
  {
    name: "iPad mini",
    image: "/images/compare/ipad-mini.png",
    description: "The full iPad experience in an ultraportable design.",
    price: "From $499",
    specs: [
      { icon: null, label: "8.3” <br/> Liquid Retina display" },
      { icon: "/images/icons/specs/a15.svg", label: "A15 Bionic chip" },
      {
        icon: "/images/icons/specs/pencil-usbc.svg",
        label: "Supports Apple Pencil (USB-C)",
      },
      {
        icon: "/images/icons/specs/pencil.svg",
        label: "Supports Apple Pencil Pro",
      },
    ],
  },
];

const iphoneData = [
  {
    name: "iPhone 16 Pro",
    image: "https://www.apple.com/v/iphone/home/cc/images/overview/select/iphone_16pro__erw9alves2qa_xlarge.png",
    description: "The ultimate iPhone.",
    price: "From $999",
    specs: [
      { icon: "https://www.apple.com/v/iphone/home/cc/images/overview/select/product_tile_icon_apple_intelligence__cy36nscjfrma_large.png", label: "Apple Intelligence" },
      { icon: "/images/icons/specs/a18pro.svg", label: "A18 Pro chip" },
      {
        icon: "/images/icons/specs/pro-camera.svg",
        label: "Pro camera system",
      },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 33 hours video playback",
      },
    ],
  },
  {
    name: "iPhone 16",
    image: "https://www.apple.com/v/iphone/home/cc/images/overview/select/iphone_16__c5bvots96jee_xlarge.png",
    description: "A total powerhouse.",
    price: "From $799",
    specs: [
      { icon: "/images/icons/specs/ai.svg", label: "Apple Intelligence" },
      { icon: "/images/icons/specs/a18.svg", label: "A18 chip" },
      {
        icon: "/images/icons/specs/dual-camera.svg",
        label: "Advanced dual-camera system",
      },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 27 hours video playback",
      },
    ],
  },
  {
    name: "iPhone 16e",
    image: "https://www.apple.com/v/iphone/home/cc/images/overview/select/iphone_16e__cubm3xoy5qaa_xlarge.png",
    description: "Latest iPhone. Greatest price.",
    price: "From $599",
    specs: [
      { icon: "/images/icons/specs/ai.svg", label: "Apple Intelligence" },
      { icon: "/images/icons/specs/a18.svg", label: "A18 chip" },
      { icon: null, label: "—" },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 26 hours video playback",
      },
    ],
  },
  {
    name: "iPhone 15",
    image: "https://www.apple.com/v/iphone/home/cc/images/overview/select/iphone_15__buwagff0mwwi_xlarge.png",
    description: "As amazing as ever.",
    price: "From $699",
    specs: [
      { icon: null, label: "—" },
      { icon: "/images/icons/specs/a16.svg", label: "A16 Bionic chip" },
      {
        icon: "/images/icons/specs/dual-camera.svg",
        label: "Dual-camera system",
      },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 26 hours video playback",
      },
    ],
  },
];

const watchData = [
     {
    name: "iPhone 16 Pro",
    image: "/images/compare/iphone-16-pro.png",
    description: "The ultimate iPhone.",
    price: "From $999",
    specs: [
      { icon: "/images/icons/specs/ai.svg", label: "Apple Intelligence" },
      { icon: "/images/icons/specs/a18pro.svg", label: "A18 Pro chip" },
      {
        icon: "/images/icons/specs/pro-camera.svg",
        label: "Pro camera system",
      },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 33 hours video playback",
      },
    ],
  },
  {
    name: "iPhone 16",
    image: "/images/compare/iphone-16.png",
    description: "A total powerhouse.",
    price: "From $799",
    specs: [
      { icon: "/images/icons/specs/ai.svg", label: "Apple Intelligence" },
      { icon: "/images/icons/specs/a18.svg", label: "A18 chip" },
      {
        icon: "/images/icons/specs/dual-camera.svg",
        label: "Advanced dual-camera system",
      },
      {
        icon: "/images/icons/specs/battery.svg",
        label: "Up to 27 hours video playback",
      },
    ],
  },
]

// You can add watchData, airpodsData, etc. here

const ComparisonGrid = ({ productType }) => {
  // Select the correct data based on the prop
  let data;
  if (productType === "ipad") {
    data = ipadData;
  } else if (productType === "iphone") {
    data = iphoneData;
  } else if (productType === "watch") {
    data = watchData;
  } else {
    // Default or error case
    return <div>Invalid product type</div>;
  }

  return (
    <div className={styles.gridContainer}>
      {data.map((product) => (
        <div key={product.name} className={styles.column}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{product.price}</p>
          <div className={styles.ctaButtons}>
            <Link
              to={`/shop/${product.name.toLowerCase().replace(" ", "-")}`}
              className={styles.buyButton}
            >
              Learn more
            </Link>
            <Link
              to={`/buy/${product.name.toLowerCase().replace(" ", "-")}`}
              className={styles.learnMore}
            >
              Buy
            </Link>
          </div>
          <hr className={styles.divider} />

          <ul className={styles.specList}>
            {product.specs.map((spec, index) => (
              <li key={index} className={styles.specItem}>
                {spec.icon && (
                  <img src={spec.icon} alt="" className={styles.specIcon} />
                )}
                <p
                  className={styles.specLabel}
                  dangerouslySetInnerHTML={{ __html: spec.label }}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ComparisonGrid;
