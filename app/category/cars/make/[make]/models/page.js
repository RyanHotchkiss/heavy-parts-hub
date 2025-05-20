import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

const makeModels = {
  toyota: [
    'Corolla', 'Camry', 'Yaris', 'Avalon', 'Celica', 'Crown', 'Matrix', 'Echo', 'iQ', 'Supra',
    'Prius', 'Sera', 'Allion', 'Altezza', 'Mark X', 'Passo', 'Starlet', 'Vios', 'Sprinter', 'Belta',
    'Cynos', 'Corona', 'Vista', 'Verossa', 'Platz', 'Tercel', 'Carina', 'Premio', 'Cressida', 'Aristo',
    'Chaser', 'Caldina', 'Duet', 'Sienta', 'Spade', 'Roomy', 'Auris', 'Blade', 'Voltz', 'Fielder',
    'Will VS', 'Soluna', 'Sai', 'Mirai', 'Granvia', 'Avensis', 'Ractis', 'Ipsum', 'RunX', 'Levin'
  ],
  honda: [
    'Accord', 'Acty', 'Airwave', 'Ascot', 'Avancier', 'Ballade', 'Beat', 'Brio', 'Capa', 'City',
    'Civic', 'Civic Ferio', 'Civic Shuttle', 'Civic Type R', 'Concerto', 'CR-V', 'CR-Z', 'Crossroad', 'Domani', 'Edix',
    'Element', 'Elysion', 'Fit', 'Freed', 'Grace', 'HR-V', 'Insight', 'Integra', 'Integra SJ', 'Jazz',
    'Lagreat', 'Legend', 'Life', 'Logo', 'Mobilio', 'NSX', 'Orthia', 'Partner', 'Prelude', 'S2000',
    'Saber', 'Shuttle', 'Spike', 'Stepwgn', 'Stream', 'Today', 'Torneo', 'Vamos', 'Zest', 'ZR-V'
  ],
  ford: [
    'Aerostar', 'Aspire', 'B-Max', 'Capri', 'Contour', 'Cortina', 'Crown Victoria', 'EcoSport', 'Edge', 'Escort',
    'Escort GT', 'Escort RS', 'Escape', 'Expedition', 'Explorer', 'Falcon', 'Festiva', 'Fiesta', 'Fiesta ST', 'Five Hundred',
    'Flex', 'Focus', 'Focus RS', 'Focus ST', 'Freestyle', 'Fusion', 'Fusion Hybrid', 'Galaxy', 'Granada', 'Granada MkII',
    'Ikon', 'Ka', 'LTD', 'Laser', 'Mondeo', 'Mustang', 'Orion', 'Pinto', 'Probe', 'S-Max',
    'Scorpio', 'Sierra', 'Taurus', 'Taurus SHO', 'Telstar', 'Tempo', 'Thunderbird', 'Verona', 'Windstar', 'ZX2'
  ],
  chevrolet: [
    'Astro', 'Aveo', 'Beat', 'Bel Air', 'Beretta', 'Blazer', 'Bolt', 'Camaro', 'Caprice', 'Caprice Classic',
    'Cavalier', 'Celebrity', 'Chevette', 'Citation', 'Cobalt', 'Corsica', 'Corvette', 'Cruze', 'Cruze Hatch', 'Epica',
    'Equinox', 'Enjoy', 'Evanda', 'Impala', 'Kalos', 'Lacetti', 'Lova', 'Lumina', 'Malibu', 'Metro',
    'Monza', 'Monza Classic', 'Nova', 'Onix', 'Optra', 'Orlando', 'Prizm', 'Sail', 'Spark', 'Sonic',
    'Spin', 'SS', 'Tracker', 'Trailblazer', 'Traverse', 'Uplander', 'Vega', 'Ventura', 'Volt'
  ],
  nissan: [
    'Sentra', 'Altima', 'Maxima', 'Versa', 'Sunny', 'Bluebird', 'Laurel', 'Primera', 'Tiida', 'Pulsar',
    'Sylphy', 'Almera', 'March', 'Micra', 'Cube', 'Note', 'AD', 'Wingroad', 'Stanza', 'Cedric',
    'Gloria', 'Teana', 'Cefiro', 'Leopard', 'Fuga', 'President', 'Skyline', 'GT-R', 'Silvia', '180SX',
    '200SX', '240SX', 'NX', 'Fairlady Z', 'Juke', 'Qashqai', 'Rogue', 'Murano', 'Pathfinder', 'X-Trail',
    'Terrano', 'Armada', 'Stagea', 'R’nessa', 'Avenir', 'Prairie', 'Liberty', 'Tino', 'Serena', 'Elgrand'
  ],
  hyundai: ['Accent', 'Alcazar', 'Aslan', 'Atos', 'Azera', 'Bayon', 'Casper', 'Centennial', 'Click', 'Creta',
  'Elantra', 'Elantra GT', 'Entourage', 'Equus', 'Excel', 'Galloper', 'Genesis', 'Getz', 'Grandeur',
  'H-1', 'HB20', 'Ioniq', 'Kona', 'Lavita', 'Matrix', 'Mistra', 'Nexo', 'Palisade', 'Pony', 'Porter',
  'Santa Fe', 'Santamo', 'Scoupe', 'Sonata', 'Staria', 'Stellar', 'Terracan', 'Tiburon', 'Trajet',
  'Tucson', 'Venue', 'Verna', 'Xcent', 'i10', 'i20', 'i30', 'i40', 'ioniq 5', 'ioniq 6'
],
  kia: ['Amanti', 'Besta', 'Borrego', 'Cadenza', 'Carens', 'Carnival', 'Ceed', 'Cerato', 'Clarus', 'Elan',
  'Enterprise', 'EV6', 'Forte', 'Joice', 'K2700', 'K2900', 'K3', 'K4', 'K5', 'K7', 'K8', 'K9', 'K900',
  'Magentis', 'Mohave', 'Morning', 'Niro', 'Opirus', 'Optima', 'Picanto', 'Pregio', 'Pride', 'Quoris',
  'Ray', 'Retona', 'Rio', 'Rondo', 'Sephia', 'Sedona', 'Seltos', 'Sonet', 'Sorento', 'Soul', 'Spectra',
  'Sportage', 'Stinger', 'Stonic', 'Telluride', 'Venga', 'Visto'
],
  volkswagen: ['Amarok', 'Arteon', 'Atlas', 'Beetle', 'Bora', 'Caddy', 'Caravelle', 'Corrado', 'Dasher', 'Derby',
  'EOS', 'Fastback', 'Fox', 'Gol', 'Golf', 'ID.3', 'ID.4', 'ID.5', 'Iltis', 'Jetta', 'Karmann Ghia',
  'Lavida', 'Lupo', 'Multivan', 'Notchback', 'Parati', 'Passat', 'Phaeton', 'Phideon', 'Polo',
  'Quantum', 'Rabbit', 'Routan', 'Santana', 'Saveiro', 'Scirocco', 'Sharan', 'Squareback', 'Surán',
  'T-Roc', 'Thing', 'Tiguan', 'Touareg', 'Touran', 'Transporter', 'Typ 3', 'Typ 4', 'Up!', 'Vento',
  'Voyage'
],
  alfa_romeo: ['1300', '147', '156', '159', '1600', '164', '166', '1750 Berlina', '1750 Spider', '1900', '2000',
  '2600', '2600 Sprint', '33', '4C', '6C', '75', '8C', 'Alfa 6', 'Alfa Romeo 145', 'Alfa Romeo 146',
  'Alfa Romeo 155', 'Alfa Romeo 164', 'Alfa Romeo 33', 'Alfa Romeo 75', 'Alfa Romeo 90', 'Alfa Romeo BAT',
  'Alfa Romeo Disco Volante', 'Alfa Romeo Junior', 'Alfa Romeo RZ', 'Alfa Romeo SZ', 'Alfa Romeo TZ',
  'Alfasud', 'Alfetta', 'Arna', 'Brera', 'GT', 'GTV', 'Giulia', 'Giulietta', 'Gran Sport', 'MiTo',
  'Montreal', 'RZ', 'SZ', 'Spider', 'Spider Veloce', 'Sprint', 'Stelvio', 'Super'
],
  genesis: ['BH', 'DH', 'EQ900', 'Essentia', 'G70', 'G70 Shooting Brake', 'G80', 'G80 Electrified', 'G80 Sport',
  'G90', 'G90L', 'GV60', 'GV60 Sport+', 'GV70', 'GV70 Sport', 'GV80', 'GV80 Concept', 'GV80 Prestige',
  'Genesis Aero', 'Genesis Concept', 'Genesis Coupe', 'Genesis Crest', 'Genesis E-G80', 'Genesis EV',
  'Genesis GT', 'Genesis GTR', 'Genesis GTS', 'Genesis Halo', 'Genesis Lux', 'Genesis Magma', 'Genesis Neo',
  'Genesis Neolun', 'Genesis One', 'Genesis Sedan', 'Genesis Sport Coupe', 'Genesis Streamliner',
  'Genesis Track Edition', 'Genesis Urban', 'Genesis X', 'Genesis X Speedium', 'HCD-1', 'HCD-10',
  'HCD-14', 'Mint', 'New York Concept', 'RK', 'RK Sport', 'RWD Concept', 'Vision G', 'X Concept'
],
  mini: ['Baker Street', 'Barbican', 'Bayswater', 'Bond Street', 'British Open', 'Camden', 'Cavendish', 'Checkmate', 'Chelsea', 'Chiltern',
  'Clubman', 'Clubvan', 'Convertible', 'Cool Blue', 'Cooper', 'Cooper S', 'Countryman', 'Coupe', 'Electric', 'Electric Resolute',
  'Goodwood', 'Graphite', 'Graphite Edition', 'Green Park', 'Greenwich', 'Hampton', 'Hardtop', 'Harrington', 'Highgate', 'Jet Black',
  'John Cooper Works', 'Kent', 'Knightsbridge', 'Mayfair', 'Monte Carlo', 'Notting Hill', 'Oxford Edition', 'Paceman', 'Park Lane',
  'Pepper White', 'Red Hot', 'Riviera', 'Roadster', 'Savile Row', 'Seven', 'Shoreditch', 'Sidewalk', 'Soho', 'St. James', 'Studio'
],
  volvo: ['1800ES', '240', '260', '340', '360', '440', '460', '740', '760', '780', '850', 'Amazon', 'C30', 'C40 Recharge', 'C70',
  'C70 Convertible', 'DUETT', 'EM90', 'EX90', 'P1800', 'P1900', 'PV36', 'PV51', 'PV544', 'S40', 'S60', 'S60 Recharge',
  'S70', 'S80', 'S90', 'S90 Executive', 'V40', 'V40 Cross Country', 'V50', 'V60', 'V60 Polestar', 'V70', 'V90',
  'V90 Cross Country', 'V90 Recharge', 'XC Classic', 'XC40', 'XC40 Recharge', 'XC60', 'XC60 Recharge', 'XC70', 'XC90'
],
  mazda: ['323', '626', '929', 'AZ-Offroad', 'Atenza', 'Autozam AZ-1', 'B-Series', 'BT-50', 'Bongo', 'CX-3', 'CX-30', 'CX-5', 'CX-50',
  'CX-7', 'CX-9', 'CX-90', 'Capella', 'Carol', 'Clef', 'Cronos', 'Demio', 'Efini MPV', 'Efini MS-6', 'Efini MS-8', 'Efini RX-7',
  'Eunos 800', 'Eunos Roadster', 'Familia', 'Lantis', 'Laputa', 'MPV', 'Mazda2', 'Mazda3', 'Mazda6', 'Millenia', 'MX-5', 'Navajo',
  'Persona', 'Premacy', 'Protegé', 'Revue', 'Roadpacer', 'RX-7', 'RX-8', 'Scrum', 'Sentia', 'Spiano', 'Titan', 'Tribute', 'Verisa'
],
  subaru: ['Alcyone', 'Ascent', 'BRZ', 'BRZ tS', 'Baja', 'Chiffon', 'Crossover 7', 'Crosstrek', 'DL', 'Dex', 'Dias II', 'Dias Wagon',
  'Domingo', 'Evoltis', 'Exiga', 'Forester', 'GL', 'GT-B', 'Impreza', 'Impreza G4', 'Impreza Sport', 'Justy', 'Legacy',
  'Legacy B4', 'Legacy Touring Wagon', 'Levorg', 'Libero', 'Loyale', 'Lucra', 'Outback', 'Pleo', 'R1', 'R2', 'RX', 'Rex',
  'SVX', 'Sambar', 'Samber Truck', 'Solterra', 'Stella', 'Touring XT', 'Traviq', 'Tribeca', 'Tribecca', 'Trezia', 'Vivio',
  'WRX', 'WRX STI', 'XT', 'XT6'
],
  bmw: ['1 Series', '2 Series', '2002', '3 Series', '4 Series', '5 Series', '507', '6 Series', '635CSi', '7 Series', '740iL',
  '8 Series', 'ActiveHybrid 3', 'ActiveHybrid 5', 'ActiveHybrid 7', 'E21', 'E30', 'E36', 'E46', 'E90', 'F30', 'G20', 'G30',
  'Gran Coupe', 'Isetta', 'M2', 'M3', 'M4', 'M5', 'M6', 'M8', 'New Class', 'Touring', 'X1', 'X2', 'X3', 'X4', 'X5', 'X5 M',
  'X6', 'X6 M', 'X7', 'Z3', 'Z4', 'Z8', 'i3', 'i4', 'i5', 'i7', 'i8'
],
  mercedes: ['190', '200', '220', '230', '240', '250', '260', '280', '300', '320', '350', '380', '400', '420', '450', '500', '560', '600', '600 SEC',
  'A-Class', 'AMG GT', 'B-Class', 'C-Class', 'CLA', 'CLK', 'CLS', 'Citan', 'E-Class', 'EQA', 'EQE', 'EQS', 'G-Class', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS',
  'Maybach GLS', 'Maybach S', 'ML-Class', 'Pagoda', 'R-Class', 'S-Class', 'SL', 'SLC', 'Sprinter', 'Unimog', 'V-Class', 'Viano', 'Vito'
  ],
  audi: ['100', '200', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Allroad', 'Avant', 'Cabriolet', 'Coupe', 'F103', 'Fox',
  'Q2', 'Q3', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'Quattro', 'R8', 'RS Q3', 'RS Q8', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S1', 'S3', 'S4', 'S5',
  'S6', 'S7', 'S8', 'SQ2', 'SQ5', 'SQ7', 'SQ8', 'Sport Quattro', 'Super 90', 'TT', 'TT RS', 'TTS', 'V8', 'e-tron', 'e-tron GT'
],
  lexus: ['CT', 'ES', 'ES 300h', 'ES 330', 'ES 350', 'GS', 'GS 300', 'GS 350', 'GS 430', 'GS 460', 'GS F', 'GSh', 'GX', 'GX 460', 'HS', 'HS 250h', 'IS',
  'IS 200t', 'IS 250', 'IS 300', 'IS 350', 'IS F', 'ISh', 'LC', 'LC 500', 'LFA', 'LS', 'LS 430', 'LSh', 'LX', 'LX 570', 'NX', 'NX 200t',
  'NX 300', 'NXh', 'RC', 'RC 300', 'RC F', 'RX', 'RX 270', 'RX 330', 'RX 350', 'RX 400h', 'RX 450h', 'RXh', 'SC', 'SC 430', 'UX', 'UX 250h', 'UXh'
],
  acura: ['CDX', 'CL', 'CL Premium', 'CL Type-S', 'CSX', 'CSX Type-S', 'EL', 'EL Touring', 'ILX', 'ILX A-Spec', 'ILX Premium', 'Integra', 'Integra GS-R',
  'Integra Type R', 'Legend', 'Legend Coupe', 'Legend Sedan', 'MDX', 'MDX A-Spec', 'MDX Elite', 'MDX Sport Hybrid', 'MDX Touring', 'NSX',
  'NSX GT3', 'NSX Type S', 'NSX-R', 'RDX', 'RDX A-Spec', 'RDX Advance', 'RL', 'RL Advance', 'RL SH-AWD', 'RLX', 'RSX', 'RSX Type-S', 'SLX',
  'TL', 'TL SH-AWD', 'TL Type-S', 'TLX', 'TLX PMC Edition', 'TLX Technology', 'TLX Type S', 'TSX', 'TSX Special Edition', 'TSX Sport Wagon', 'Vigor', 'Vigor GS', 'ZDX', 'ZDX Advance'
],
  infiniti: ['EX35', 'FX35', 'FX37', 'FX45', 'FX50', 'G20', 'G25', 'G35', 'G35x', 'G37', 'G37 Convertible', 'G37 Coupe', 'G37 Sedan', 'I30', 'I35',
  'I35 Luxury', 'J30', 'JX35', 'M30', 'M35', 'M35h', 'M37', 'M45', 'M56', 'Q Inspiration', 'Q30', 'Q45', 'Q45t', 'Q50', 'Q50 Eau Rouge',
  'Q50 Hybrid', 'Q60', 'Q60 Coupe', 'Q60 Red Sport 400', 'Q70', 'Q70 Hybrid', 'Q70L', 'QX30', 'QX4', 'QX50', 'QX50 Essential', 'QX55',
  'QX56', 'QX60', 'QX60 Hybrid', 'QX60 Luxe', 'QX70', 'QX80', 'QX80 Monograph', 'QX Sport Inspiration'
],
  dodge: ['Aries', 'Aspen', 'Attitude', 'Avenger', 'Caliber', 'Caliber SRT4', 'Caravan', 'Challenger', 'Challenger Hellcat', 'Charger',
  'Charger Daytona', 'Charger Scat Pack', 'Colt', 'Coronet', 'Custom Royal', 'Dart', 'Dart GT', 'Daytona', 'Diplomat', 'Durango',
  'Durango SRT', 'Dynasty', 'Grand Caravan', 'Hornet', 'Intrepid', 'Intrepid ES', 'Journey', 'Lancer', 'Magnum', 'Mirada', 'Monaco',
  'Neon', 'Nitro', 'Omni', 'Polara', 'Raider', 'Ram 1500', 'Ram 2500', 'Ram 3500', 'Ram ProMaster', 'Ram Promaster City',
  'Ramcharger', 'Shadow', 'Spirit', 'St. Regis', 'Stealth', 'Stratus', 'SX 2.0', 'Verna', 'Viper'
],
chrysler: [
    '200', '200 Convertible', '300', '300 SRT8', '300 Touring', '300C', '300M', 'Acclaim', 'Aries', 'Aspen',
    'Aspen Limited', 'Caravan', 'Cirrus', 'Concorde', 'Cordoba', 'Crossfire', 'Crossfire SRT6', 'Daytona', 'Dynasty', 'E-Class',
    'Executive', 'Fifth Avenue', 'Grand Voyager', 'Imperial', 'Imperial Crown', 'Intrepid', 'LHS', 'LHS Limited', 'Laser', 'LeBaron',
    'Neon', 'New Yorker', 'New Yorker Brougham', 'Newport', 'PT Cruiser', 'PT Cruiser Convertible', 'Pacifica', 'Pacifica Hybrid', 'Saratoga', 'Sebring',
    'Sebring Coupe', 'Sebring Sedan', 'Spirit', 'Sundance', 'TC by Maserati', 'Town & Country', 'Town & Country Limited', 'Vision', 'Voyager', 'Windsor'
  ],
  
  buick: [
    'Allure', 'Apollo', 'Cascada', 'Century', 'Century Limited', 'Electra', 'Electra 225', 'Enclave', 'Enclave Avenir', 'Encore',
    'Encore GX', 'Enspire', 'Envision', 'Envista', 'Estate Wagon', 'Excelle', 'GL8', 'GS', 'GSX', 'Gran Sport',
    'Gran Sport 455', 'Invicta', 'LaCrosse', 'LaCrosse Avenir', 'LeSabre', 'LeSabre Custom', 'Limited', 'Lucerne', 'Lucerne Super', 'Park Avenue',
    'Rainier', 'Reatta', 'Regal', 'Regal TourX', 'Rendezvous', 'Riviera', 'Skyhawk', 'Skylark', 'Skylark Custom', 'Somerset',
    'Special', 'Super', 'Terraza', 'VELITE 6', 'VELITE 7', 'Verano', 'Verano GS', 'Wildcat', 'Y-Job'
  ],
  
  cadillac: [
    'ATS', 'Allanté', 'BLS', 'Blackwing', 'Brougham', 'CELESTIQ', 'CT4', 'CT4-V', 'CT5', 'CT5-V',
    'CT6', 'CT6 Plug-In', 'CTS', 'Calais', 'Catera', 'Ciel', 'Coupe de Ville', 'DTS', 'DeVille', 'ELR',
    'ELR Coupe', 'ELR Luxury', 'Eldorado', 'Escala', 'Escalade', 'Escalade ESV', 'Evoq', 'Fleetwood', 'LSE', 'LYRIQ',
    'SRX', 'SRX4', 'STS', 'Sedan de Ville', 'Series 62', 'Series 75', 'Seville', 'Sixteen', 'Sixty Special', 'Urban Luxury Concept',
    'Vizon', 'XLR', 'XT3', 'XT4', 'XT4 Premium', 'XT5', 'XT5 Sport', 'XT6', 'XT6 Sport', 'XTS'
  ],
  
  porsche: [
    '356', '718 Boxster', '718 Cayman', '718 Spyder', '911', '911 Cabriolet', '911 Carrera', '911 Carrera 4', '911 Carrera 4S', '911 Carrera S',
    '911 GT2', '911 GT3', '911 GTS', '911 R', '911 RSR', '911 SC', '911 Speedster', '911 Targa', '911 Turbo', '911 Turbo S',
    '918 Spyder', '924', '928', '944', '959', '968', 'Boxster', 'Carrera GT', 'Cayenne', 'Cayenne Coupe',
    'Cayenne GTS', 'Cayenne S', 'Cayenne Turbo', 'Cayman', 'Macan', 'Macan GTS', 'Macan S', 'Macan Turbo', 'Mission E', 'Panamera',
    'Panamera 4', 'Panamera 4S', 'Panamera GTS', 'Panamera Sport Turismo', 'Panamera Turbo', 'Taycan', 'Taycan 4S', 'Taycan Cross Turismo', 'Taycan GTS', 'Taycan Turbo'
  ],
  
  tesla: [
    'Cybertruck', 'Cybertruck AWD', 'Cybertruck Foundation Series', 'Cybertruck RWD', 'Cybertruck Tri-Motor', 'Model 2 (rumored)', 'Model 3', 'Model 3 Highland', 'Model 3 LR AWD', 'Model 3 Long Range',
    'Model 3 Performance', 'Model 3 Performance Highland', 'Model 3 RWD', 'Model 3 SR+', 'Model 3 Signature', 'Model 3 Standard Range', 'Model S', 'Model S 100D', 'Model S 60', 'Model S 75',
    'Model S 85', 'Model S 90D', 'Model S Long Range', 'Model S P100D', 'Model S P85', 'Model S P85D', 'Model S P90D', 'Model S Plaid', 'Model S Signature', 'Model X',
    'Model X 100D', 'Model X 60D', 'Model X 75D', 'Model X 90D', 'Model X Long Range', 'Model X P100D', 'Model X P90D', 'Model X Plaid', 'Model X Signature', 'Model Y',
    'Model Y Long Range', 'Model Y Performance', 'Powerwall', 'Roadster', 'Roadster 2008', 'Roadster 2022', 'Semi', 'Semi Long Range', 'Semi Short Range', 'Solar Roof'
  ],
  
  mitsubishi: [
    '3000GT', 'ASX', 'ASX Ralliart', 'Airtrek', 'Attrage', 'Bravo', 'Canter', 'Carisma', 'Chariot', 'Colt',
    'Cordia', 'Debonair', 'Delica', 'Delica D:5', 'Delica Space Gear', 'Diamante', 'Dingo', 'Eclipse', 'Emerald', 'Endeavor',
    'Eterna', 'FTO', 'Galant', 'Grandis', 'GTO', 'Jeep J-Series', 'L200', 'L300', 'Lancer', 'Lancer Evolution',
    'Minica', 'Minica Toppo', 'Minicab', 'Mirage', 'Montero', 'Outlander', 'Outlander Sport', 'Pajero', 'RVR', 'Savrin',
    'Sigma', 'Space Star', 'Starion', 'Strada', 'Toppo', 'Town Box', 'Tredia', 'Xpander', 'Zinger', 'i-MiEV'
  ],
  
  fiat: [
    '1100', '124', '125', '127', '128', '131', '132', '1400', '500', '850',
    'Albea', 'Argenta', 'Argo', 'Barchetta', 'Brava', 'Bravo', 'Bravo II', 'Campagnola', 'Cinquecento', 'Croma',
    'Cronos', 'Doblo', 'Ducato', 'Fiorino', 'Freemont', 'Fullback', 'Idea', 'Linea', 'Marea', 'Multipla',
    'Palio', 'Panda', 'Punto', 'Punto Evo', 'Qubo', 'Regata', 'Ritmo', 'Sedici', 'Seicento', 'Siena',
    'Stilo', 'Strada', 'Tempra', 'Tipo', 'Tipo Cross', 'Topolino', 'Toro', 'Ulysse', 'Uno', 'X1/9'
  ],
  
  peugeot: [
    '1007', '106', '108', '2008', '203', '204', '205', '206', '206 SW', '207',
    '208', '209', '3008', '301', '304', '305', '306', '307', '308', '309',
    '4007', '4008', '403', '404', '405', '406', '407', '408', '408 Coupe', '5008',
    '504', '508', '604', '605', '607', '806', '807', 'Bipper', 'Boxer', 'Expert',
    'Hoggar', 'J5', 'Landtrek', 'P4', 'Pars', 'Partner', 'RCZ', 'Rifter', 'Traveller', 'iOn'
  ],
  
  renault: [
    'Alaskan', 'Arkana', 'Avantime', 'Captur', 'Caravelle', 'Clio', 'Dauphine', 'Duster', 'Espace', 'Floride',
    'Fluence', 'Fuego', 'Grand Scenic', 'Juvaquatre', 'Kadjar', 'Kangoo', 'Koleos', 'KwId', 'Laguna', 'Latitude',
    'Logan', 'Master', 'Megane', 'Modus', 'Pulse', 'R11', 'R12', 'R16', 'R19', 'R21',
    'R25', 'R30', 'R4', 'R5', 'R6', 'R8', 'R9', 'Safrane', 'Sandero', 'Scala',
    'Scenic', 'Symbol', 'Talisman', 'Thalia', 'Trafic', 'Twingo', 'Twizy', 'Vel Satis', 'Wind', 'ZOE'
  ],
  skoda: [
    '1000 MB', '105', '110R', '120', '130', '440 Spartak', '450', 'Citigo', 'Citigo-e iV', 'Enyaq',
    'Enyaq Coupe', 'Enyaq Sportline', 'Estelle', 'Fabia', 'Fabia Combi', 'Fabia RS', 'Favorit',
    'Favorit LX', 'Felicia', 'Felicia Combi', 'Felicia Fun', 'Felicia Pickup', 'Forman', 'Kamiq',
    'Kamiq Monte Carlo', 'Karoq', 'Karoq Scout', 'Karoq Sportline', 'Kodiaq', 'Kodiaq RS',
    'MB100', 'MB120', 'Octavia', 'Octavia Combi', 'Octavia RS', 'Octavia Tour', 'Popular',
    'Rapid', 'Rapid Spaceback', 'Roomster', 'Roomster Scout', 'S110', 'Scala', 'Scala Monte Carlo',
    'Superb', 'Superb Combi', 'Superb Elegance', 'Superb iV', 'Yeti', 'Yeti Outdoor'
  ], 
  citroën: [
    '2CV', 'Ami', 'AX', 'Acadiane', 'Berlingo', 'BX', 'C1', 'C2', 'C3', 'C3 Aircross', 'C3 Picasso',
    'C4', 'C4 Cactus', 'C4 Picasso', 'C4 X', 'C5', 'C5 Aircross', 'C5 X', 'C6', 'C8', 'C-Métisse',
    'C-Triomphe', 'C-Zero', 'Cactus M', 'CX', 'DS3', 'DS3 Crossback', 'DS4', 'DS5', 'DS7 Crossback',
    'DS9', 'Dispatch', 'Dyane', 'GS', 'GSA', 'Jumper', 'Jumpy', 'LN', 'LNA', 'Mehari', 'Nemo',
    'Rosalie', 'Saxo', 'SM', 'Traction Avant', 'Visa', 'XM', 'Xantia', 'ZX'
  ],
  seat: [
    '124', '127', '128', '131', '132', '133', '1400', '600', '850', 'Alhambra', 'Alhambra 4Drive', 'Altea', 'Altea Freetrack',
    'Altea XL', 'Arona', 'Arona Beats', 'Arosa', 'Ateca', 'Ateca X-Perience', 'Cordoba', 'Cupra Ateca', 'Cupra Born',
    'Cupra Formentor', 'Cupra Leon', 'Exeo', 'Exeo ST', 'Formula', 'Fura', 'Fura Crono', 'Ibiza', 'Ibiza Cupra',
    'Ibiza ST', 'Inca', 'Leon', 'Leon Cupra', 'Leon X-Perience', 'Malaga', 'Marbella', 'Mii', 'Mii Electric', 'Panda',
    'Ritmo', 'Ronda', 'Ronda Crono', 'Sport', 'Terra', 'Tarraco', 'Toledo', 'Toledo Coupe', 'Toledo Cupra',
    'Toledo Style'
  ],
  saab: [
    '9-3', '9-3 Arc', '9-3 SportCombi', '9-3 Vector', '9-3 Viggen', '9-3X', '9-4X', '9-5', '9-5 BioPower',
    '9-5 Griffin', '9-5 SportCombi', '9-7X', '90', '900', '900 Cabriolet', '900 GLE', '900 Lux', '900 S',
    '900 Talladega', '900 Turbo', '9000', '9000 Aero', '9000 CD', '9000 CS', '92', '93', '93B', '95',
    '95 Station Wagon', '96', '96 GL', '96 Sport', '96 V4', '99', '99 EMS', '99 GLE', '99 Turbo', 'C-Type',
    'D-Type', 'Formula Junior', 'GT750', 'Monte Carlo 850', 'Saab 60', 'Saab 900 NG', 'Saab Aero-X',
    'Saab EV-1', 'Saab PhoeniX', 'Saab Quantum', 'Safir', 'Sonett I', 'Sonett II', 'Sonett III'
  ],
  jaguar: [
    'C-Type', 'D-Type', 'E-PACE', 'E-PACE R-Dynamic', 'E-Type', 'F-PACE', 'F-PACE R-Dynamic', 'F-PACE SVR',
    'F-TYPE', 'F-Type R', 'F-Type SVR', 'I-PACE', 'I-PACE Black', 'I-PACE HSE', 'LS', 'Mark 1', 'Mark 2',
    'Mark X', 'S-Type', 'S-Type R', 'XE', 'XE SV Project 8', 'XF', 'XF Sportbrake', 'XJ', 'XJ Portfolio',
    'XJ Sovereign', 'XJ Super V8', 'XJ12', 'XJ220', 'XJ6', 'XJ8', 'XJR', 'XJR-15', 'XK', 'XK120',
    'XK140', 'XK150', 'XK8', 'XKR', 'XKR-S', 'X-Type', 'X-Type Estate', 'X308', 'X300', 'X350', 'X351',
    'XFR', 'XFR-S'
  ],
  land_rover: [
    'Defender', 'Defender 110', 'Defender 130', 'Defender 75th Edition', 'Defender 90', 'Defender Adventure',
    'Defender Heritage', 'Defender Works V8', 'Defender X', 'Defender XS', 'Discovery', 'Discovery Adventure',
    'Discovery First Edition', 'Discovery HSE', 'Discovery Landmark', 'Discovery SE', 'Discovery Sport',
    'Discovery SVX', 'Freelander', 'Freelander Sport', 'Freelander i6', 'LR2', 'LR3', 'LR4', 'Range Rover',
    'Range Rover Autobiography', 'Range Rover Classic', 'Range Rover Classic CSK', 'Range Rover Classic LSE',
    'Range Rover County', 'Range Rover Evoque', 'Range Rover Evoque Convertible', 'Range Rover Fifty',
    'Range Rover HSE', 'Range Rover Holland & Holland', 'Range Rover PHEV', 'Range Rover SV Coupe',
    'Range Rover SVAutobiography', 'Range Rover Sentinel', 'Range Rover Sport', 'Range Rover Velar',
    'Range Rover Vogue', 'Range Stormer', 'Santana', 'Series I', 'Series II', 'Series III', 'Series III Stage 1 V8',
    'Velar First Edition'
  ],
  lincoln: [
    'Aviator', 'Aviator Black Label', 'Aviator Grand Touring', 'Aviator Jet Appearance', 'Blackwood',
    'Capri', 'Continental', 'Continental Black Label', 'Continental Coach Door', 'Corsair', 'Corsair Grand Touring',
    'Corsair Reserve', 'Cosmopolitan', 'Custom', 'Lincoln L', 'Lincoln-Zephyr', 'LS', 'Mark III', 'Mark IV',
    'Mark LT', 'Mark V', 'Mark VI', 'Mark VII', 'Mark VIII', 'MKS', 'MKS EcoBoost', 'MKT', 'MKT Town Car',
    'MKX', 'MKX Black Label', 'MKX Reserve', 'MKZ', 'MKZ Hybrid', 'MKC', 'MKC Black Label', 'Model H',
    'Model K', 'Model L', 'Nautilus', 'Navigator', 'Navigator Black Label', 'Navigator L', 'Navigator Reserve',
    'Premier', 'Town Car', 'Town Car Cartier', 'Town Car Signature', 'Versailles', 'Zephyr', 'Zephyr Reflection'
  ],
  pontiac: [
    '6000', 'Acadian', 'Astre', 'Aztek', 'Beaumont', 'Bonneville', 'Bonneville GXP', 'Bonneville SSEi',
    'Catalina', 'Chieftain', 'Executive', 'Firebird', 'Firebird Formula', 'Fiero', 'G3', 'G5', 'G6',
    'G6 GXP', 'G8 GT', 'G8 GXP', 'Grand Am', 'Grand Prix', 'Grand Ville', 'GTO', 'GTO Judge', 'J2000',
    'Laurentian', 'LeMans', 'LeMans Sport', 'Montana', 'Parisienne', 'Pathfinder', 'Phoenix', 'Safari',
    'Solstice', 'Solstice GXP', 'Star Chief', 'Sunbird', 'Sunbird Turbo', 'Sunfire', 'Sunfire GT',
    'T1000', 'Tempest', 'Tempest Custom', 'Torrent', 'Trans Am', 'Trans Am WS6', 'Trans Sport', 'Ventura',
    'Vibe'
  ],
  saturn: [
    'Aura', 'Aura Green Line', 'Aura Hybrid', 'Aura XE', 'Aura XR', 'Astra', 'Ion', 'Ion 1', 'Ion 2', 'Ion 3',
    'Ion Quad Coupe', 'Ion Red Line', 'Ion Sedan', 'L-Series', 'L100', 'L200', 'L300', 'LW Wagon', 'LW200', 'LW300',
    'Outlook', 'Outlook AWD', 'Outlook FWD', 'Outlook XE', 'Outlook XR', 'Relay', 'Relay 2', 'Relay 3', 'S-Series', 'S-Series Coupe',
    'S-Series Sedan', 'S-Series Wagon', 'SC Coupe', 'SC1', 'SC2', 'SKY', 'Sky Convertible', 'Sky Red Line', 'Sky Turbo', 'SL',
    'SL Sedan', 'SL1', 'SL2', 'SW1', 'SW2', 'Vue', 'Vue AWD', 'Vue FWD', 'Vue Green Line', 'Vue Red Line'
  ],
  scion: [
    'FR-S', 'FR-S RS 1.0', 'FR-S RS 2.0', 'FR-S RS 3.0', 'FUSE Concept', 'HAKO Coupe', 'Hako Coupe Concept', 'bbX Concept', 'ccX Concept', 'iA',
    'iA Sedan', 'iM', 'iM Hatchback', 'iQ', 'iQ City Car', 'iQ Coupe', 'iQ EV', 't2B Concept', 'tC', 'tC Coupe',
    'tC RS 1.0', 'tC RS 10.0', 'tC RS 2.0', 'tC RS 3.0', 'tC RS 4.0', 'tC RS 5.0', 'tC RS 6.0', 'tC RS 7.0', 'tC RS 8.0', 'tC RS 9.0',
    'tC Release Series', 'xA', 'xA Hatchback', 'xB', 'xB (Gen 2)', 'xB RS 1.0', 'xB RS 2.0', 'xB RS 3.0', 'xB RS 4.0', 'xB RS 5.0',
    'xB RS 6.0', 'xB RS 7.0', 'xB Wagon', 'xD', 'xD Hatchback', 'xD RS 1.0', 'xD RS 2.0', 'xD RS 3.0', 'xR', 'xR Concept'
  ],
  suzuki: [
    'Across', 'Aerio', 'Alto', 'Alto Works', 'Baleno', 'Baleno RS', 'Cappuccino', 'Carry', 'Celerio', 'Ciaz',
    'Equator', 'Ertiga', 'Esteem', 'Every', 'Forenza', 'Fronte', 'Grand Vitara', 'Hustler', 'Ignis', 'Ignis Hybrid',
    'Jimny', 'Jimny Sierra', 'Kizashi', 'Lapin', 'Liana', 'Mighty Boy', 'MR Wagon', 'Palette', 'Reno', 'S-Presso',
    'Samurai', 'Sidekick', 'Solio', 'Spacia', 'Splash', 'Swift', 'Swift Hybrid', 'Swift Sport', 'SX4', 'SX4 S-Cross',
    'SX4 Sedan', 'Twin', 'Verona', 'Vitara', 'Vitara Brezza', 'Wagon R', 'Wagon R Stingray', 'X-90', 'XL-7', 'XL6'
  ],
  geo: [
    'Chevy Nova', 'Chevy Nova Hatchback', 'Chevy Sprint', 'Firefly', 'Firefly Convertible', 'Firefly Hatchback', 'Firefly Turbo', 'GL', 'GL Hatchback', 'Geo Concept',
    'GSi', 'Isuzu Impulse', 'Justy', 'LSi', 'Metro', 'Metro Base', 'Metro Convertible', 'Metro GL', 'Nova', 'Nova Base',
    'Nova CL', 'Nova Hatchback', 'Nova Twin Cam', 'Opel Astra (Geo)', 'Opel Kadett', 'Prizm', 'Prizm GSi', 'Prizm LSi', 'Prizm Sedan', 'Spectrum',
    'Spectrum Hatchback', 'Spectrum Sedan', 'Spectrum Turbo', 'Storm', 'Storm Base', 'Storm Fastback', 'Storm GSi', 'Storm Hatchback', 'Storm Twin Cam', 'Swift',
    'Swift GA', 'Swift GT', 'Tracker', 'Tracker 4WD', 'Tracker Base', 'Tracker Convertible', 'Tracker Hardtop', 'Tracker LSi', 'Turbo Metro', 'XFi'
  ],
  daewoo: [
    'Alpheon', 'Arcadia', 'Brougham', 'Chairman', 'Chairman CM', 'Chairman H', 'Cielo', 'Damas', 'Damas II', 'Espero',
    'Espero CD', 'Espero GT', 'Evanda', 'Gentra', 'Imperial', 'Kalos', 'Kalos Hatchback', 'Kalos Sedan', 'Lacetti', 'Lacetti Premiere',
    'Lanos', 'Lanos Hatchback', 'Lanos Sedan', 'Lanos Sport', 'LeMans', 'Leganza', 'Maepsy', 'Maestro', 'Matiz', 'Matiz Joy',
    'Mirage', 'Musso', 'Nexia', 'Nexia II', 'Nubira', 'Nubira CDX', 'Orion', 'Prince', 'Prince GTE', 'Prince Royale',
    'Racer', 'Racer GTE', 'Rezzo', 'Royale', 'Super Salon', 'Tacuma', 'Tacuma SX', 'Tico', 'Winstorm', 'Winstorm MaXX'
  ],
  smart: [
    'BoConcept Edition', 'Brabus Tailor Made', 'Brabus Ultimate', 'Cabrio Brabus', 'Cabrio Passion', 'Cabrio Pure', 'City Coupe Pulse', 'City-Coupe', 'Coupe Brabus', 'Crossblade',
    'Crosstown', 'EQ Forfour', 'EQ Fortwo', 'EQ Fortwo Nightsky', 'EQ Fortwo Racing Green', 'Edition One Cabrio', 'Edition Pure', 'Edition1', 'Electric Drive Cabrio', 'Electric Drive Coupe',
    'Forease', 'Forease+', 'Forfour', 'Forspeed', 'Fortwo', 'Fortwo Cabrio', 'Fortwo Coupe', 'Fortwo Electric Drive', 'Fourjoy', 'Limited Silver',
    'Night Sky Edition', 'Passion', 'Prime EQ', 'Pulse', 'Pure EQ', 'Roadster', 'Roadster Coupe', 'Smart 451', 'Smart 453', 'Smart Black',
    'Smart Cityflame', 'Smart Final Collector’s Edition', 'Smart K', 'Smart Silver', 'Smart Ultimate 125', 'Smart eScooter', 'Smart forstars', 'Urban Style', 'Vision EQ', 'White Edition'
  ],
  oldsmobile: [
    '442', 'Achieva', 'Achieva SC', 'Alero', 'Aurora', 'Aurora Autobahn', 'Bravada', 'Bravada AWD', 'Calais', 'Ciera',
    'Ciera SL', 'Custom Cruiser', 'Custom Cruiser LS', 'Cutlass', 'Cutlass Calais', 'Cutlass Ciera', 'Cutlass Cruiser', 'Cutlass S', 'Cutlass Salon', 'Cutlass Supreme',
    'Delta 88', 'Delta 88 Royale', 'Dynamic 88', 'Eighty-Eight', 'F-85', 'Firenza', 'Firenza GT', 'Intrigue', 'Intrigue GLS', 'Intrigue GX',
    'Jetaway', 'Jetfire', 'Jetstar 88', 'Jetstar I', 'LSS', 'Ninety-Eight', 'Omega', 'Series 60', 'Series 70', 'Series 76',
    'Series 88', 'Series 98', 'Silhouette', 'Silhouette Premiere', 'Starfire', 'Super 88', 'Toronado', 'Toronado Brougham', 'Toronado Trofeo', 'Vista Cruiser'
  ],
  aston_martin: [
    'AM-RB 003', 'AMR21', 'CC100 Speedster', 'Cygnet', 'DB Mark III', 'DB10', 'DB11', 'DB11 Volante', 'DB12', 'DB12 Volante',
    'DB2', 'DB4', 'DB5', 'DB5 Goldfinger', 'DB6', 'DB7', 'DB7 Zagato', 'DB9', 'DBR1', 'DBR9',
    'DBS', 'DBS GT Zagato', 'DBS Superleggera', 'DBX', 'DBX AMR', 'DBX Straight-Six', 'DBX V8', 'DBX707', 'Lagonda', 'Lagonda Taraf',
    'One-77', 'Rapide', 'V12 Speedster', 'V12 Vantage', 'V12 Zagato', 'V8 Coupe', 'V8 Vantage', 'Valhalla', 'Valhalla Concept', 'Valiant',
    'Valkyrie', 'Vanquish', 'Vanquish S', 'Vanquish Zagato', 'Vantage GT', 'Vantage N430', 'Vantage Roadster', 'Victor', 'Virage', 'Vulcan'
  ],
  bentley: [
    'Arnage', 'Arnage R', 'Arnage Red Label', 'Arnage T', 'Azure', 'Azure T', 'Bentayga', 'Bentayga First Edition', 'Bentayga Hybrid', 'Bentayga S',
    'Bentayga Speed', 'Bentayga V8', 'Bentayga W12', 'Bentley EXP 100 GT', 'Brooklands', 'Brooklands Coupe', 'Continental GT', 'Continental GT Design Series', 'Continental GT First Edition', 'Continental GT Mulliner',
    'Continental GT Number 9', 'Continental GT Speed', 'Continental GT V8', 'Continental GT V8 S', 'Continental GT3-R', 'Continental GTC', 'Continental GTC Speed', 'Continental GTC V8', 'Continental R', 'Continental SC',
    'Continental Supersports', 'Continental T', 'EXP 9 F', 'Eight', 'Flying Spur', 'Flying Spur Hybrid', 'Flying Spur Mulliner', 'Flying Spur V8', 'Flying Spur V8 S', 'Flying Spur W12',
    'Mark VI', 'Mulsanne', 'Mulsanne Mulliner', 'Mulsanne Speed', 'S1', 'S2', 'S3', 'T-Series', 'Turbo R', 'Turbo S'
  ],
  ferrari: [
    '208 GT4', '250 GT', '250 GTO', '296 GTB', '296 GTS', '308 GTS', '328 GTB', '330 GT', '348 TS', '360 Modena',
    '360 Spider', '365 GT4', '365 GTB/4 Daytona', '400i', '456 GT', '458 Italia', '458 Speciale', '458 Spider', '488 GTB', '488 Spider',
    '512 BB', '512 TR', '550 Maranello', '575M Maranello', '612 Scaglietti', '812 GTS', '812 Superfast', 'California', 'California T', 'Enzo',
    'F12berlinetta', 'F12tdf', 'F355', 'F430', 'F8 Spider', 'F8 Tributo', 'Ferrari Dino', 'GTC4Lusso', 'GTC4Lusso T', 'LaFerrari',
    'LaFerrari Aperta', 'Mondial', 'Portofino', 'Portofino M', 'Purosangue', 'Roma', 'SF90 Spider', 'SF90 Stradale', 'Superamerica', 'Testarossa'
  ],
  "rolls-royce": [
    'Boat Tail', 'Camargue', 'Corniche', 'Cullinan', 'Cullinan Arctic White', 'Cullinan Black Badge', 'Cullinan Inspiration Series', 'Cullinan Twilight', 'Dawn', 'Dawn Black Badge',
    'Dawn Inspired by Music', 'Dawn Mayfair Edition', 'Dawn Silver Bullet', 'Flying Spur', 'Ghost', 'Ghost Black Badge', 'Ghost Extended', 'Ghost Series II', 'Ghost Zenith', 'Park Ward',
    'Phantom', 'Phantom Coupe', 'Phantom Dragon', 'Phantom Drophead Coupé', 'Phantom Extended', 'Phantom Limo', 'Phantom Metropolitan', 'Phantom Oribe', 'Phantom Series II', 'Phantom Tempus',
    'Phantom Tranquillity', 'Silver Cloud', 'Silver Dawn', 'Silver Ghost', 'Silver Ghost Collection', 'Silver Seraph', 'Silver Shadow', 'Silver Spirit', 'Silver Spur', 'Silver Wraith',
    'Spectre', 'Sweptail', 'Twenty', 'Vision Next 100', 'Wraith', 'Wraith Black Badge', 'Wraith Eagle VIII', 'Wraith Kryptos', 'Wraith Luminary', 'Wraith Luminary Collection'
  ],
  hummer: [
    'EV Edition 1', 'EV Launch Edition', 'EV Off-Road Package', 'EV Pickup', 'EV SUV', 'EV SUV 2X', 'EV SUV 3X', 'EV SUV Adventure', 'EV SUV Launch', 'EV SUV Premium',
    'EV2', 'EV2X', 'EV3 Edition', 'EV3X', 'H1', 'H1 Alpha', 'H1 Civilian', 'H1 Duramax', 'H1 Limited Edition', 'H1 Military',
    'H1 Open Top', 'H1 Slantback', 'H1 Soft Top', 'H1 Wagon', 'H2', 'H2 Adventure', 'H2 All-Terrain', 'H2 Base', 'H2 Black Chrome Edition', 'H2 Chrome Edition',
    'H2 Limited Edition', 'H2 Luxury', 'H2 Off-Road', 'H2 Sut Luxury', 'H2 SUT', 'H2 Urban Edition', 'H3', 'H3 Adventure', 'H3 Alpha', 'H3 Base',
    'H3 Limited Edition', 'H3 Luxury', 'H3 Moab', 'H3T', 'H3T Alpha', 'H3T Off-Road', 'H3T Sport', 'H3X', 'H3X Alpha'
  ],
  };

export default function ModelsPage({ params }) {
  const make = decodeURIComponent(params.make).toLowerCase();
  const models = makeModels[make] || [];

  return (
    <div className="p-6 min-h-screen">
        <Breadcrumbs/>
      <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      <h1 className="text-3xl font-bold mb-6 capitalize">Select a Model for {make}</h1>

      {models.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {models.map((model) => (
            <Link
              key={model}
              href={`/category/cars/make/${make}/models/${model.toLowerCase().replace(/\s+/g, '-')}`}
              className="block p-4 rounded shadow bg-white dark:bg-zinc-800 hover:scale-105 transition text-center"
            >
              {model}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-zinc-500">No known models yet for this make.</p>
      )}

      <div className="mt-10 text-center">
        <Link href="/search" className="text-blue-500 hover:underline">
          Can’t find your model? Click here to search by part number
        </Link>
      </div>
    </div>
  );
}