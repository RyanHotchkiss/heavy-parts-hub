'use client';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function PartsCategories({ params }) {
  const { make, model, year } = params;

  const partCategories = {
    'Engine': ['Block', 'Pistons', 'Crankshaft', 'Camshaft', 'Valves', 'Timing Belt/Chain', 'Intake Manifold', 'Exhaust Manifold', 'Fuel Injection', 'Spark Plugs', 'Sensors', 'Radiator', 'Thermostat', 'Water Pump'],
    'Chassis / Frame': ['Structural Frame', 'Crossmembers', 'Subframes', 'Mounting Brackets', 'Reinforcement Panels'],
    'Body': ['Fenders', 'Doors', 'Bumpers', 'Hood', 'Trunk', 'Grilles', 'Quarter Panels', 'Rocker Panels'],
    'Cab / Interior': ['Seats', 'Dashboard', 'Console', 'HVAC Controls', 'Steering Wheel', 'Pedals', 'Headliner', 'Carpets', 'Vents'],
    'Electrical': ['Battery', 'Alternator', 'Starter', 'Wiring Harnesses', 'Sensors', 'ECU/Modules', 'Relays', 'Fuses', 'Power Windows', 'Lock Actuators', 'Instrument Cluster'],
    'Wheels / Tires': ['Rims', 'Tires', 'Hubcaps', 'Lug Nuts', 'Wheel Hubs', 'Wheel Bearings', 'Valve Stems'],
    'Transmission / Drivetrain': ['Transmission', 'Clutch', 'Flywheel', 'Driveshaft', 'CV Joints', 'Axle Shafts', 'Differential', 'Transfer Case', 'Torque Converter'],
    'Brakes / Suspension': ['Brake Pads', 'Rotors', 'Calipers', 'Master Cylinder', 'Shocks', 'Struts', 'Springs', 'Control Arms', 'Sway Bars', 'ABS Sensors', 'Ball Joints', 'Bushings'],
    'Fuel System': ['Fuel Tank', 'Pump', 'Lines', 'Injectors', 'Filters', 'Fuel Pressure Regulator', 'Throttle Body'],
    'Exhaust System': ['Muffler', 'Catalytic Converter', 'Exhaust Pipe', 'Resonator', 'Oxygen Sensors', 'EGR Valve'],
    'Cooling System': ['Radiator', 'Water Pump', 'Cooling Fans', 'Hoses', 'Thermostat', 'Overflow Tank'],
    'HVAC': ['A/C Compressor', 'Evaporator', 'Heater Core', 'Blower Motor', 'Condenser', 'Expansion Valve', 'Climate Control Module'],
    'Lighting': ['Headlights', 'Tail Lights', 'Fog Lights', 'Turn Signals', 'Bulbs', 'Housings', 'Switches', 'DRLs'],
    'Glass & Mirrors': ['Windshield', 'Side Windows', 'Rear Glass', 'Side Mirrors', 'Mirror Motors', 'Glass Seals'],
    'Accessories / Trim': ['Badges', 'Molding', 'Roof Racks', 'Spoilers', 'Tow Hooks', 'Splash Guards', 'Running Boards'],
    'Safety Systems': ['Airbags', 'Seatbelts', 'Crash Sensors', 'TPMS Sensors', 'Collision Modules']
  };

  return (
    <div style={{ padding: '2rem' }}>
        <Breadcrumbs />
      <h1>{make.toUpperCase()} {model.toUpperCase()} ({year}) – Parts Breakdown</h1>

      <style>{`
        .flex-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .dropdown-box {
          border: 1px solid #ccc;
          border-radius: 6px;
          background-color: #f0f0f0;
          max-width: fit-content;
          min-width: 220px;
          flex: 1 1 auto;
        }

        .dropdown-box summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.6rem 1rem;
          cursor: pointer;
          font-weight: 600;
          background: #eee;
          list-style: none;
        }

        .dropdown-box summary::after {
          content: '▾';
          margin-left: 0.5rem;
          transition: transform 0.2s ease-in-out;
        }

        .dropdown-box[open] summary::after {
          transform: rotate(180deg);
        }

        .part-list {
          padding: 0.5rem 1rem 1rem;
        }

        .part-list li {
          margin: 0.25rem 0;
        }

        .part-list a {
          color: #0066cc;
          text-decoration: none;
        }

        .part-list a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="flex-wrap">
        
        {Object.entries(partCategories).map(([category, parts]) => (
          <details className="dropdown-box" key={category}>
            <summary>{category}</summary>
            <ul className="part-list">
              {parts.map((part) => (
                <li key={part}>
                  <Link href={`/category/cars/make/${make}/models/${model}/years/${year}/parts/${category.toLowerCase().replace(/[\s\/]/g, '-')}/${part.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}`}>
                    {part}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
