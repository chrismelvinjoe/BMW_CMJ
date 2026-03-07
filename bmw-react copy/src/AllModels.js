import React, { useState, useEffect } from 'react';
import './AllModels.css';

const AllModels = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const modelCategories = {
    'sedan': [
      { id: 1, name: '1 Series', image: '/assets/Models/15M.png', price: '$35,000', type: 'compact', drivetrain: 'fuel' },
      { id: 2, name: '2 Series', image: '/assets/Models/2series.png', price: '$38,000', type: 'compact', drivetrain: 'fuel' },
      { id: 3, name: '3 Series', image: '/assets/Models/3series.png', price: '$42,000', type: 'executive', drivetrain: 'hybrid' },
      { id: 4, name: '5 Series', image: '/assets/Models/5LMB.png', price: '$55,000', type: 'executive', drivetrain: 'hybrid' },
      { id: 5, name: '7 Series', image: '/assets/Models/7series.png', price: '$87,000', type: 'luxury', drivetrain: 'electric' }
    ],
    'suv': [
      { id: 11, name: 'X1', image: '/assets/Models/X1.png', price: '$35,000', type: 'compact', drivetrain: 'fuel' },
      { id: 12, name: 'X3', image: '/assets/Models/X3.png', price: '$45,000', type: 'mid-size', drivetrain: 'hybrid' },
      { id: 13, name: 'X5', image: '/assets/Models/X5.png', price: '$61,000', type: 'mid-size', drivetrain: 'electric' },
      { id: 14, name: 'X7', image: '/assets/Models/X7.png', price: '$77,000', type: 'full-size', drivetrain: 'hybrid' },
      { id: 15, name: 'XM', image: '/assets/Models/XM.png', price: '$159,000', type: 'performance', drivetrain: 'hybrid' }
    ],
    'electric': [
      { id: 17, name: 'i7', image: '/assets/Models/i7.png', price: '$120,000', type: 'luxury', drivetrain: 'electric' },
      { id: 18, name: 'i7 M', image: '/assets/Models/i7M.png', price: '$145,000', type: 'performance', drivetrain: 'electric', isM: true },
      { id: 19, name: 'iX', image: '/assets/Models/iX.png', price: '$87,000', type: 'suv', drivetrain: 'electric' },
      { id: 20, name: 'iX1 LWB', image: '/assets/Models/iX1 LWB.png', price: '$45,000', type: 'compact', drivetrain: 'electric' }
    ],
    'm-competition': [
      { id: 6, name: 'M2', image: '/assets/Models/M2.png', price: '$58,000', type: 'compact', drivetrain: 'fuel', isM: true },
      { id: 7, name: 'M4', image: '/assets/Models/M4.png', price: '$72,000', type: 'coupe', drivetrain: 'fuel', isM: true },
      { id: 8, name: 'M4 CS', image: '/assets/Models/M4cs.png', price: '$95,000', type: 'performance', drivetrain: 'fuel', isM: true },
      { id: 9, name: 'M5', image: '/assets/Models/M5.png', price: '$105,000', type: 'sedan', drivetrain: 'hybrid', isM: true },
      { id: 10, name: 'M8', image: '/assets/Models/M8.png', price: '$130,000', type: 'gran-coupe', drivetrain: 'hybrid', isM: true }
    ],
    'sports': [
      { id: 16, name: 'Z4', image: '/assets/Models/Z4.png', price: '$52,000', type: 'roadster', drivetrain: 'fuel' }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Models' },
    { id: 'sedan', name: 'Sedans' },
    { id: 'suv', name: 'SUVs' },
    { id: 'electric', name: 'Electric' },
    { id: 'm-competition', name: 'M Competition' },
    { id: 'sports', name: 'Sports' }
  ];

  const getAllModels = () => {
    if (selectedCategory === 'all') {
      return Object.values(modelCategories).flat();
    }
    return modelCategories[selectedCategory] || [];
  };

  const getDrivetrainLabel = (drivetrain) => {
    switch(drivetrain) {
      case 'electric': return 'Electric';
      case 'hybrid': return 'Hybrid';
      case 'fuel': return 'Fuel';
      default: return drivetrain;
    }
  };

  const getCurrentCategoryName = () => {
    const category = categories.find(cat => cat.id === selectedCategory);
    return category ? category.name : 'All Models';
  };

  return (
    <div className="all-models-page">
      <div className="models-header">
        <div className="header-content">
          <h1>BMW Model Collection</h1>
          <p>Discover our complete lineup of precision-engineered vehicles</p>
        </div>
        <div className={`category-labels ${isMenuCollapsed ? 'collapsed' : ''}`}>
          <div className="menu-toggle" onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}>
            <span className="toggle-text">{getCurrentCategoryName()}</span>
            <span className="toggle-icon">{isMenuCollapsed ? '▼' : '▲'}</span>
          </div>
          <div className="menu-items">
            {categories.map(category => (
              <div 
                key={category.id}
                className={`category-label ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsMenuCollapsed(true);
                }}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="models-container">
        {getAllModels().map(model => (
          <div key={model.id} className="model-card">
            <div className="model-image">
              <img src={model.image} alt={model.name} />
              <div className="model-type-badge">{model.type}</div>
              {model.isM && (
                <div className="m-badge">
                  <img src="/assets/images/BMW-M-logo.png" alt="BMW M" className="m-logo-img" />
                </div>
              )}
            </div>
            <div className="model-info">
              <h3>{model.name}</h3>
              <div className="drivetrain-info">
                <span className="drivetrain-label">{getDrivetrainLabel(model.drivetrain)}</span>
              </div>
              <div className="price">{model.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
