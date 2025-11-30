'use client';

import { useState, useEffect } from 'react';
import { useCarStore } from '@/lib/store/carStore';
import css from './Filters.module.css';

export default function Filters() {
  const { setFilters, brands, getBrands, fetchCars, resetCars, setPage } =
    useCarStore();

  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  useEffect(() => {
    if (brands.length === 0) {
      getBrands();
    }
  }, [brands.length, getBrands]);

  const handleSearch = async () => {
    const newFilters = {
      ...(brand && { brand }),
      ...(price && { rentalPrice: Number(price) }),
      ...(mileageFrom && { mileageFrom: Number(mileageFrom) }),
      ...(mileageTo && { mileageTo: Number(mileageTo) }),
    };

    setFilters(newFilters);
    resetCars();
    setPage(1);

    await fetchCars(false);
  };

  return (
    <div className={css.container}>
      <div className={css.field}>
        <label className={css.label}>Car brand</label>
        <div className={css.customSelectWrapper}>
          <div
            className={css.customSelectInput}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span>{brand || 'Choose a brand'}</span>
            <svg
              className={css.selectIcon}
              aria-hidden="true"
              width="16"
              height="16"
              fill="#101828"
            >
              <use
                href={
                  dropdownOpen
                    ? '/symbol-defs.svg#icon-chevron-up'
                    : '/symbol-defs.svg#icon-chevron-down'
                }
              />
            </svg>
          </div>

          {dropdownOpen && (
            <div className={css.optionsList}>
              {brands.map((b) => (
                <div
                  key={b}
                  className={css.option}
                  onClick={() => {
                    setBrand(b);
                    setDropdownOpen(false);
                  }}
                >
                  {b}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={css.field}>
        <label className={css.label}>Price / 1 hour</label>
        <div className={css.customSelectWrapper}>
          <div
            className={css.customSelectInput}
            onClick={() => setPriceDropdownOpen((prev) => !prev)}
          >
            <span>{price ? `To $${price}` : 'Choose a price'}</span>
            <svg
              className={css.selectIcon}
              aria-hidden="true"
              width="16"
              height="16"
              fill="#101828"
            >
              <use
                href={
                  priceDropdownOpen
                    ? '/symbol-defs.svg#icon-chevron-up'
                    : '/symbol-defs.svg#icon-chevron-down'
                }
              />
            </svg>
          </div>

          {priceDropdownOpen && (
            <div className={css.optionsList}>
              {['20', '30', '40', '50', '60', '70', '80'].map((p) => (
                <div
                  key={p}
                  className={css.option}
                  onClick={() => {
                    setPrice(p);
                    setPriceDropdownOpen(false);
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={css.mileageWrapper}>
        <label className={css.label}>Сar mileage / km</label>

        <div className={css.mileageFieldsRow}>
          <div className={css.mileageField}>
            <input
              className={css.input}
              type="number"
              value={mileageFrom}
              onChange={(e) => setMileageFrom(e.target.value)}
              placeholder="From"
            />
          </div>
          <div className={css.mileageField}>
            <input
              className={css.input}
              type="number"
              value={mileageTo}
              onChange={(e) => setMileageTo(e.target.value)}
              placeholder="To"
            />
          </div>
        </div>
      </div>

      <button className={css.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
