// src/components/ComparisonGrid/ComparisonGrid.jsx (Updated)

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ComparisonGrid.module.css';

// --- UPDATED DATA STRUCTURE ---
// The `specs` array now contains objects with an `icon` and a `label`.
// Using `null` for the icon will correctly render text-only specs.
const ipadData = [
    { 
        name: 'iPad Pro', 
        image: '/images/ipad/ipad-pro.png', 
        description: 'The ultimate iPad experience with the most advanced technology.', 
        price: 'From $999 or $83.25/mo. for 12 mo.**', 
        specs: [
            { icon: null, label: '13” or 11” <br/> Ultra Retina XDR display' },
            { icon: '/images/icons/specs/m4.svg', label: 'M4 chip' },
            { icon: '/images/icons/specs/ai.svg', label: 'Apple Intelligence' },
            { icon: '/images/icons/specs/camera.svg', label: '12MP Wide camera <br/> 4K video' },
            { icon: '/images/icons/specs/pencil.svg', label: 'Supports Apple Pencil Pro' },
            { icon: '/images/icons/specs/keyboard.svg', label: 'Supports Magic Keyboard' }
        ] 
    },
    { 
        name: 'iPad Air', 
        image: '/images/ipad/ipad-air.png', 
        description: 'Serious performance in a thin and light design.', 
        price: 'From $599 or $49.91/mo. for 12 mo.**', 
        specs: [
            { icon: null, label: '13” or 11” <br/> Liquid Retina display' },
            { icon: '/images/icons/specs/m2.svg', label: 'M2 chip' },
            { icon: '/images/icons/specs/ai.svg', label: 'Apple Intelligence' },
            { icon: '/images/icons/specs/camera.svg', label: '12MP Wide camera <br/> 4K video' },
            { icon: '/images/icons/specs/pencil.svg', label: 'Supports Apple Pencil Pro' },
            { icon: '/images/icons/specs/keyboard.svg', label: 'Supports Magic Keyboard' }
        ] 
    },
    { 
        name: 'iPad', 
        image: '/images/ipad/ipad-10th.png', 
        description: 'The colorful, all-screen iPad for the things you do every day.', 
        price: 'From $349 or $29.08/mo. for 12 mo.**', 
        specs: [
            { icon: null, label: '10.9” <br/> Liquid Retina display' },
            { icon: '/images/icons/specs/a14.svg', label: 'A14 Bionic chip' },
            { icon: null, label: '—' },
            { icon: '/images/icons/specs/camera.svg', label: '12MP Wide camera <br/> 4K video' },
            { icon: '/images/icons/specs/pencil-usbc.svg', label: 'Supports Apple Pencil (USB-C)' },
            { icon: '/images/icons/specs/keyboard-folio.svg', label: 'Supports Magic Keyboard Folio' }
        ] 
    },
    { 
        name: 'iPad mini', 
        image: '/images/ipad/ipad-mini.png', 
        description: 'The full iPad experience in an ultraportable design.', 
        price: 'From $499 or $41.58/mo. for 12 mo.**', 
        specs: [
            { icon: null, label: '8.3” <br/> Liquid Retina display' },
            { icon: '/images/icons/specs/a15.svg', label: 'A15 Bionic chip' },
            { icon: null, label: '—' },
            { icon: '/images/icons/specs/camera.svg', label: '12MP Wide camera <br/> 4K video' },
            { icon: '/images/icons/specs/pencil-usbc.svg', label: 'Supports Apple Pencil (USB-C)' },
            { icon: '/images/icons/specs/keyboard-bluetooth.svg', label: 'Supports Bluetooth keyboards' }
        ] 
    },
];

const ComparisonGrid = () => {
    return (
        <div className={styles.gridContainer}>
            {ipadData.map(ipad => (
                <div key={ipad.name} className={styles.column}>
                    <img src={ipad.image} alt={ipad.name} className={styles.ipadImage} />
                    <h3 className={styles.ipadName}>{ipad.name}</h3>
                    <p className={styles.description}>{ipad.description}</p>
                    <p className={styles.price}>{ipad.price}</p>
                    <div className={styles.ctaButtons}>
                        <Link to={`/shop/${ipad.name.toLowerCase().replace(' ', '-')}`} className={styles.buyButton}>Learn more</Link>
                        <Link to={`/buy/${ipad.name.toLowerCase().replace(' ', '-')}`} className={styles.learnMore}>Buy</Link>
                    </div>
                    <hr className={styles.divider} />
                    
                    {/* --- UPDATED SPEC RENDERING LOGIC --- */}
                    <ul className={styles.specList}>
                        {ipad.specs.map((spec, index) => (
                            <li key={index} className={styles.specItem}>
                                {spec.icon && <img src={spec.icon} alt="" className={styles.specIcon} />}
                                <p className={styles.specLabel} dangerouslySetInnerHTML={{ __html: spec.label }} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ComparisonGrid;