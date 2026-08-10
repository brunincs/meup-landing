/**
 * Dados de aeroportos baseados em fontes públicas (OpenFlights, IATA)
 * Estrutura: { code: IATA, city, country, name, major: boolean }
 * major = true para capitais, hubs internacionais e aeroportos de alto tráfego
 */

// ══════════════════════════════════════════════════════════════════════════════
// AEROPORTOS DO BRASIL (origem)
// ══════════════════════════════════════════════════════════════════════════════
const AIRPORTS_BRAZIL = [
  // Capitais e grandes hubs (major = true)
  { code: 'GRU', city: 'São Paulo', country: 'Brasil', name: 'Guarulhos International', major: true },
  { code: 'CGH', city: 'São Paulo', country: 'Brasil', name: 'Congonhas', major: true },
  { code: 'VCP', city: 'Campinas', country: 'Brasil', name: 'Viracopos International', major: true },
  { code: 'GIG', city: 'Rio de Janeiro', country: 'Brasil', name: 'Galeão International', major: true },
  { code: 'SDU', city: 'Rio de Janeiro', country: 'Brasil', name: 'Santos Dumont', major: true },
  { code: 'BSB', city: 'Brasília', country: 'Brasil', name: 'Presidente Juscelino Kubitschek', major: true },
  { code: 'CNF', city: 'Belo Horizonte', country: 'Brasil', name: 'Confins International', major: true },
  { code: 'SSA', city: 'Salvador', country: 'Brasil', name: 'Deputado Luís Eduardo Magalhães', major: true },
  { code: 'REC', city: 'Recife', country: 'Brasil', name: 'Guararapes International', major: true },
  { code: 'FOR', city: 'Fortaleza', country: 'Brasil', name: 'Pinto Martins International', major: true },
  { code: 'POA', city: 'Porto Alegre', country: 'Brasil', name: 'Salgado Filho International', major: true },
  { code: 'CWB', city: 'Curitiba', country: 'Brasil', name: 'Afonso Pena International', major: true },
  { code: 'FLN', city: 'Florianópolis', country: 'Brasil', name: 'Hercílio Luz International', major: true },
  { code: 'MAO', city: 'Manaus', country: 'Brasil', name: 'Eduardo Gomes International', major: true },
  { code: 'BEL', city: 'Belém', country: 'Brasil', name: 'Val de Cans International', major: true },
  { code: 'NAT', city: 'Natal', country: 'Brasil', name: 'São Gonçalo do Amarante', major: true },
  { code: 'MCZ', city: 'Maceió', country: 'Brasil', name: 'Zumbi dos Palmares', major: true },
  { code: 'GYN', city: 'Goiânia', country: 'Brasil', name: 'Santa Genoveva', major: true },
  { code: 'VIX', city: 'Vitória', country: 'Brasil', name: 'Eurico de Aguiar Salles', major: true },
  { code: 'CGB', city: 'Cuiabá', country: 'Brasil', name: 'Marechal Rondon', major: true },

  // Capitais estaduais e aeroportos regionais importantes
  { code: 'AJU', city: 'Aracaju', country: 'Brasil', name: 'Santa Maria', major: false },
  { code: 'PLU', city: 'Belo Horizonte', country: 'Brasil', name: 'Pampulha', major: false },
  { code: 'BVB', city: 'Boa Vista', country: 'Brasil', name: 'Atlas Brasil Cantanhede', major: false },
  { code: 'CPV', city: 'Campina Grande', country: 'Brasil', name: 'Presidente João Suassuna', major: false },
  { code: 'CGR', city: 'Campo Grande', country: 'Brasil', name: 'Campo Grande International', major: false },
  { code: 'CXJ', city: 'Caxias do Sul', country: 'Brasil', name: 'Hugo Cantergiani', major: false },
  { code: 'XAP', city: 'Chapecó', country: 'Brasil', name: 'Serafin Enoss Bertaso', major: false },
  { code: 'FEN', city: 'Fernando de Noronha', country: 'Brasil', name: 'Fernando de Noronha', major: false },
  { code: 'IGU', city: 'Foz do Iguaçu', country: 'Brasil', name: 'Cataratas International', major: false },
  { code: 'IOS', city: 'Ilhéus', country: 'Brasil', name: 'Jorge Amado', major: false },
  { code: 'IMP', city: 'Imperatriz', country: 'Brasil', name: 'Prefeito Renato Moreira', major: false },
  { code: 'JPA', city: 'João Pessoa', country: 'Brasil', name: 'Presidente Castro Pinto', major: false },
  { code: 'JOI', city: 'Joinville', country: 'Brasil', name: 'Lauro Carneiro de Loyola', major: false },
  { code: 'JDO', city: 'Juazeiro do Norte', country: 'Brasil', name: 'Orlando Bezerra de Menezes', major: false },
  { code: 'LDB', city: 'Londrina', country: 'Brasil', name: 'Governador José Richa', major: false },
  { code: 'MCP', city: 'Macapá', country: 'Brasil', name: 'Alberto Alcolumbre International', major: false },
  { code: 'MGF', city: 'Maringá', country: 'Brasil', name: 'Silvio Name Junior', major: false },
  { code: 'NVT', city: 'Navegantes', country: 'Brasil', name: 'Ministro Victor Konder', major: false },
  { code: 'PMW', city: 'Palmas', country: 'Brasil', name: 'Brigadeiro Lysias Rodrigues', major: false },
  { code: 'PFB', city: 'Passo Fundo', country: 'Brasil', name: 'Lauro Kurtz', major: false },
  { code: 'PNZ', city: 'Petrolina', country: 'Brasil', name: 'Senador Nilo Coelho', major: false },
  { code: 'BPS', city: 'Porto Seguro', country: 'Brasil', name: 'Porto Seguro', major: false },
  { code: 'PVH', city: 'Porto Velho', country: 'Brasil', name: 'Governador Jorge Teixeira', major: false },
  { code: 'RAO', city: 'Ribeirão Preto', country: 'Brasil', name: 'Leite Lopes', major: false },
  { code: 'RBR', city: 'Rio Branco', country: 'Brasil', name: 'Plácido de Castro', major: false },
  { code: 'STM', city: 'Santarém', country: 'Brasil', name: 'Maestro Wilson Fonseca', major: false },
  { code: 'SLZ', city: 'São Luís', country: 'Brasil', name: 'Marechal Cunha Machado', major: false },
  { code: 'THE', city: 'Teresina', country: 'Brasil', name: 'Senador Petrônio Portella', major: false },
  { code: 'UDI', city: 'Uberlândia', country: 'Brasil', name: 'Ten. Cel. Aviador César Bombonato', major: false },
  { code: 'UBA', city: 'Uberaba', country: 'Brasil', name: 'Mário de Almeida Franco', major: false },
  { code: 'JTC', city: 'Bauru', country: 'Brasil', name: 'Moussa Nakhl Tobias', major: false },
  { code: 'PPB', city: 'Presidente Prudente', country: 'Brasil', name: 'Presidente Prudente', major: false },
  { code: 'SJP', city: 'São José do Rio Preto', country: 'Brasil', name: 'Prof. Eribelto Manoel Reino', major: false },
  { code: 'MOC', city: 'Montes Claros', country: 'Brasil', name: 'Mário Ribeiro', major: false },
  { code: 'IPN', city: 'Ipatinga', country: 'Brasil', name: 'Usiminas', major: false },
  { code: 'JDF', city: 'Juiz de Fora', country: 'Brasil', name: 'Francisco de Assis', major: false },
  { code: 'CFB', city: 'Cabo Frio', country: 'Brasil', name: 'Cabo Frio International', major: false },
  { code: 'MEA', city: 'Macaé', country: 'Brasil', name: 'Macaé', major: false },
  { code: 'QPS', city: 'Piracicaba', country: 'Brasil', name: 'Piracicaba', major: false }
];

// ══════════════════════════════════════════════════════════════════════════════
// AEROPORTOS DO MUNDO (destino)
// ══════════════════════════════════════════════════════════════════════════════
const AIRPORTS_WORLD = [
  // ─── AMÉRICA DO SUL ───
  // Argentina
  { code: 'EZE', city: 'Buenos Aires', country: 'Argentina', name: 'Ministro Pistarini International', major: true },
  { code: 'AEP', city: 'Buenos Aires', country: 'Argentina', name: 'Jorge Newbery Airpark', major: true },
  { code: 'COR', city: 'Córdoba', country: 'Argentina', name: 'Ingeniero Aeronáutico Ambrosio L.V. Taravella', major: false },
  { code: 'MDZ', city: 'Mendoza', country: 'Argentina', name: 'El Plumerillo', major: false },
  { code: 'BRC', city: 'Bariloche', country: 'Argentina', name: 'San Carlos de Bariloche', major: false },
  { code: 'IGR', city: 'Puerto Iguazú', country: 'Argentina', name: 'Cataratas del Iguazú', major: false },
  { code: 'USH', city: 'Ushuaia', country: 'Argentina', name: 'Malvinas Argentinas', major: false },
  { code: 'FTE', city: 'El Calafate', country: 'Argentina', name: 'Comandante Armando Tola', major: false },

  // Chile
  { code: 'SCL', city: 'Santiago', country: 'Chile', name: 'Comodoro Arturo Merino Benítez', major: true },
  { code: 'IQQ', city: 'Iquique', country: 'Chile', name: 'Diego Aracena', major: false },
  { code: 'ANF', city: 'Antofagasta', country: 'Chile', name: 'Cerro Moreno', major: false },
  { code: 'CCP', city: 'Concepción', country: 'Chile', name: 'Carriel Sur', major: false },
  { code: 'PMC', city: 'Puerto Montt', country: 'Chile', name: 'El Tepual', major: false },
  { code: 'PUQ', city: 'Punta Arenas', country: 'Chile', name: 'Presidente Carlos Ibáñez', major: false },
  { code: 'IPC', city: 'Ilha de Páscoa', country: 'Chile', name: 'Mataveri International', major: false },

  // Uruguai
  { code: 'MVD', city: 'Montevidéu', country: 'Uruguai', name: 'Carrasco International', major: true },
  { code: 'PDP', city: 'Punta del Este', country: 'Uruguai', name: 'Capitán de Corbeta Carlos A. Curbelo', major: false },

  // Paraguai
  { code: 'ASU', city: 'Assunção', country: 'Paraguai', name: 'Silvio Pettirossi', major: true },

  // Bolívia
  { code: 'VVI', city: 'Santa Cruz', country: 'Bolívia', name: 'Viru Viru International', major: true },
  { code: 'LPB', city: 'La Paz', country: 'Bolívia', name: 'El Alto International', major: true },

  // Peru
  { code: 'LIM', city: 'Lima', country: 'Peru', name: 'Jorge Chávez International', major: true },
  { code: 'CUZ', city: 'Cusco', country: 'Peru', name: 'Alejandro Velasco Astete', major: false },
  { code: 'AQP', city: 'Arequipa', country: 'Peru', name: 'Rodríguez Ballón', major: false },

  // Colômbia
  { code: 'BOG', city: 'Bogotá', country: 'Colômbia', name: 'El Dorado International', major: true },
  { code: 'MDE', city: 'Medellín', country: 'Colômbia', name: 'José María Córdova', major: true },
  { code: 'CTG', city: 'Cartagena', country: 'Colômbia', name: 'Rafael Núñez', major: false },
  { code: 'CLO', city: 'Cali', country: 'Colômbia', name: 'Alfonso Bonilla Aragón', major: false },

  // Equador
  { code: 'UIO', city: 'Quito', country: 'Equador', name: 'Mariscal Sucre', major: true },
  { code: 'GYE', city: 'Guayaquil', country: 'Equador', name: 'José Joaquín de Olmedo', major: true },
  { code: 'GPS', city: 'Galápagos', country: 'Equador', name: 'Seymour', major: false },

  // Venezuela
  { code: 'CCS', city: 'Caracas', country: 'Venezuela', name: 'Simón Bolívar International', major: true },

  // Guianas
  { code: 'GEO', city: 'Georgetown', country: 'Guiana', name: 'Cheddi Jagan International', major: false },
  { code: 'PBM', city: 'Paramaribo', country: 'Suriname', name: 'Johan Adolf Pengel', major: false },
  { code: 'CAY', city: 'Caiena', country: 'Guiana Francesa', name: 'Félix Eboué', major: false },

  // ─── AMÉRICA DO NORTE ───
  // Estados Unidos - Hubs principais
  { code: 'JFK', city: 'Nova York', country: 'Estados Unidos', name: 'John F. Kennedy International', major: true },
  { code: 'EWR', city: 'Newark', country: 'Estados Unidos', name: 'Newark Liberty International', major: true },
  { code: 'LGA', city: 'Nova York', country: 'Estados Unidos', name: 'LaGuardia', major: true },
  { code: 'LAX', city: 'Los Angeles', country: 'Estados Unidos', name: 'Los Angeles International', major: true },
  { code: 'SFO', city: 'São Francisco', country: 'Estados Unidos', name: 'San Francisco International', major: true },
  { code: 'ORD', city: 'Chicago', country: 'Estados Unidos', name: "O'Hare International", major: true },
  { code: 'MIA', city: 'Miami', country: 'Estados Unidos', name: 'Miami International', major: true },
  { code: 'FLL', city: 'Fort Lauderdale', country: 'Estados Unidos', name: 'Fort Lauderdale-Hollywood', major: true },
  { code: 'MCO', city: 'Orlando', country: 'Estados Unidos', name: 'Orlando International', major: true },
  { code: 'ATL', city: 'Atlanta', country: 'Estados Unidos', name: 'Hartsfield-Jackson International', major: true },
  { code: 'DFW', city: 'Dallas', country: 'Estados Unidos', name: 'Dallas/Fort Worth International', major: true },
  { code: 'IAH', city: 'Houston', country: 'Estados Unidos', name: 'George Bush Intercontinental', major: true },
  { code: 'DEN', city: 'Denver', country: 'Estados Unidos', name: 'Denver International', major: true },
  { code: 'SEA', city: 'Seattle', country: 'Estados Unidos', name: 'Seattle-Tacoma International', major: true },
  { code: 'BOS', city: 'Boston', country: 'Estados Unidos', name: 'Logan International', major: true },
  { code: 'DCA', city: 'Washington', country: 'Estados Unidos', name: 'Ronald Reagan National', major: true },
  { code: 'IAD', city: 'Washington', country: 'Estados Unidos', name: 'Dulles International', major: true },
  { code: 'PHL', city: 'Filadélfia', country: 'Estados Unidos', name: 'Philadelphia International', major: true },
  { code: 'CLT', city: 'Charlotte', country: 'Estados Unidos', name: 'Charlotte Douglas', major: true },
  { code: 'PHX', city: 'Phoenix', country: 'Estados Unidos', name: 'Phoenix Sky Harbor', major: true },
  { code: 'LAS', city: 'Las Vegas', country: 'Estados Unidos', name: 'Harry Reid International', major: true },
  { code: 'SAN', city: 'San Diego', country: 'Estados Unidos', name: 'San Diego International', major: false },
  { code: 'TPA', city: 'Tampa', country: 'Estados Unidos', name: 'Tampa International', major: false },
  { code: 'MSP', city: 'Minneapolis', country: 'Estados Unidos', name: 'Minneapolis-Saint Paul', major: false },
  { code: 'DTW', city: 'Detroit', country: 'Estados Unidos', name: 'Detroit Metropolitan', major: false },
  { code: 'HNL', city: 'Honolulu', country: 'Estados Unidos', name: 'Daniel K. Inouye International', major: true },
  { code: 'ANC', city: 'Anchorage', country: 'Estados Unidos', name: 'Ted Stevens Anchorage', major: false },

  // Canadá
  { code: 'YYZ', city: 'Toronto', country: 'Canadá', name: 'Toronto Pearson International', major: true },
  { code: 'YVR', city: 'Vancouver', country: 'Canadá', name: 'Vancouver International', major: true },
  { code: 'YUL', city: 'Montreal', country: 'Canadá', name: 'Montréal-Pierre Elliott Trudeau', major: true },
  { code: 'YYC', city: 'Calgary', country: 'Canadá', name: 'Calgary International', major: false },
  { code: 'YOW', city: 'Ottawa', country: 'Canadá', name: 'Ottawa Macdonald-Cartier', major: false },
  { code: 'YEG', city: 'Edmonton', country: 'Canadá', name: 'Edmonton International', major: false },
  { code: 'YQB', city: 'Quebec', country: 'Canadá', name: 'Jean Lesage International', major: false },

  // México
  { code: 'MEX', city: 'Cidade do México', country: 'México', name: 'Benito Juárez International', major: true },
  { code: 'CUN', city: 'Cancún', country: 'México', name: 'Cancún International', major: true },
  { code: 'GDL', city: 'Guadalajara', country: 'México', name: 'Don Miguel Hidalgo y Costilla', major: true },
  { code: 'MTY', city: 'Monterrey', country: 'México', name: 'General Mariano Escobedo', major: false },
  { code: 'SJD', city: 'Los Cabos', country: 'México', name: 'Los Cabos International', major: false },
  { code: 'PVR', city: 'Puerto Vallarta', country: 'México', name: 'Gustavo Díaz Ordaz', major: false },

  // Caribe
  { code: 'HAV', city: 'Havana', country: 'Cuba', name: 'José Martí International', major: true },
  { code: 'SJU', city: 'San Juan', country: 'Porto Rico', name: 'Luis Muñoz Marín', major: true },
  { code: 'SDQ', city: 'Santo Domingo', country: 'República Dominicana', name: 'Las Américas', major: true },
  { code: 'PUJ', city: 'Punta Cana', country: 'República Dominicana', name: 'Punta Cana International', major: true },
  { code: 'NAS', city: 'Nassau', country: 'Bahamas', name: 'Lynden Pindling International', major: false },
  { code: 'MBJ', city: 'Montego Bay', country: 'Jamaica', name: 'Sangster International', major: false },
  { code: 'KIN', city: 'Kingston', country: 'Jamaica', name: 'Norman Manley International', major: false },
  { code: 'AUA', city: 'Oranjestad', country: 'Aruba', name: 'Queen Beatrix International', major: false },
  { code: 'CUR', city: 'Willemstad', country: 'Curaçao', name: 'Hato International', major: false },
  { code: 'SXM', city: 'Sint Maarten', country: 'Sint Maarten', name: 'Princess Juliana International', major: false },
  { code: 'BGI', city: 'Bridgetown', country: 'Barbados', name: 'Grantley Adams International', major: false },
  { code: 'POS', city: 'Port of Spain', country: 'Trinidad e Tobago', name: 'Piarco International', major: false },

  // América Central
  { code: 'PTY', city: 'Cidade do Panamá', country: 'Panamá', name: 'Tocumen International', major: true },
  { code: 'SJO', city: 'San José', country: 'Costa Rica', name: 'Juan Santamaría International', major: true },
  { code: 'GUA', city: 'Guatemala', country: 'Guatemala', name: 'La Aurora International', major: false },
  { code: 'SAL', city: 'San Salvador', country: 'El Salvador', name: 'Óscar Arnulfo Romero', major: false },
  { code: 'TGU', city: 'Tegucigalpa', country: 'Honduras', name: 'Toncontín International', major: false },
  { code: 'MGA', city: 'Manágua', country: 'Nicarágua', name: 'Augusto C. Sandino', major: false },
  { code: 'BZE', city: 'Belize', country: 'Belize', name: 'Philip S. W. Goldson', major: false },

  // ─── EUROPA ───
  // Portugal
  { code: 'LIS', city: 'Lisboa', country: 'Portugal', name: 'Humberto Delgado', major: true },
  { code: 'OPO', city: 'Porto', country: 'Portugal', name: 'Francisco Sá Carneiro', major: true },
  { code: 'FAO', city: 'Faro', country: 'Portugal', name: 'Faro', major: false },
  { code: 'FNC', city: 'Funchal', country: 'Portugal', name: 'Madeira - Cristiano Ronaldo', major: false },
  { code: 'PDL', city: 'Ponta Delgada', country: 'Portugal', name: 'João Paulo II', major: false },

  // Espanha
  { code: 'MAD', city: 'Madri', country: 'Espanha', name: 'Adolfo Suárez Madrid-Barajas', major: true },
  { code: 'BCN', city: 'Barcelona', country: 'Espanha', name: 'Josep Tarradellas Barcelona-El Prat', major: true },
  { code: 'PMI', city: 'Palma de Maiorca', country: 'Espanha', name: 'Palma de Mallorca', major: false },
  { code: 'AGP', city: 'Málaga', country: 'Espanha', name: 'Málaga-Costa del Sol', major: false },
  { code: 'VLC', city: 'Valência', country: 'Espanha', name: 'Valencia', major: false },
  { code: 'SVQ', city: 'Sevilha', country: 'Espanha', name: 'Sevilla', major: false },
  { code: 'BIO', city: 'Bilbao', country: 'Espanha', name: 'Bilbao', major: false },
  { code: 'IBZ', city: 'Ibiza', country: 'Espanha', name: 'Ibiza', major: false },

  // França
  { code: 'CDG', city: 'Paris', country: 'França', name: 'Charles de Gaulle', major: true },
  { code: 'ORY', city: 'Paris', country: 'França', name: 'Orly', major: true },
  { code: 'NCE', city: 'Nice', country: 'França', name: 'Nice Côte d Azur', major: false },
  { code: 'LYS', city: 'Lyon', country: 'França', name: 'Lyon-Saint Exupéry', major: false },
  { code: 'MRS', city: 'Marselha', country: 'França', name: 'Marseille Provence', major: false },
  { code: 'TLS', city: 'Toulouse', country: 'França', name: 'Toulouse-Blagnac', major: false },
  { code: 'BOD', city: 'Bordeaux', country: 'França', name: 'Bordeaux-Mérignac', major: false },

  // Itália
  { code: 'FCO', city: 'Roma', country: 'Itália', name: 'Leonardo da Vinci-Fiumicino', major: true },
  { code: 'CIA', city: 'Roma', country: 'Itália', name: 'Ciampino', major: false },
  { code: 'MXP', city: 'Milão', country: 'Itália', name: 'Malpensa', major: true },
  { code: 'LIN', city: 'Milão', country: 'Itália', name: 'Linate', major: false },
  { code: 'VCE', city: 'Veneza', country: 'Itália', name: 'Marco Polo', major: false },
  { code: 'FLR', city: 'Florença', country: 'Itália', name: 'Amerigo Vespucci', major: false },
  { code: 'NAP', city: 'Nápoles', country: 'Itália', name: 'Capodichino', major: false },
  { code: 'BLQ', city: 'Bolonha', country: 'Itália', name: 'Guglielmo Marconi', major: false },
  { code: 'PSA', city: 'Pisa', country: 'Itália', name: 'Galileo Galilei', major: false },

  // Reino Unido
  { code: 'LHR', city: 'Londres', country: 'Reino Unido', name: 'Heathrow', major: true },
  { code: 'LGW', city: 'Londres', country: 'Reino Unido', name: 'Gatwick', major: true },
  { code: 'STN', city: 'Londres', country: 'Reino Unido', name: 'Stansted', major: false },
  { code: 'LTN', city: 'Londres', country: 'Reino Unido', name: 'Luton', major: false },
  { code: 'LCY', city: 'Londres', country: 'Reino Unido', name: 'London City', major: false },
  { code: 'MAN', city: 'Manchester', country: 'Reino Unido', name: 'Manchester', major: false },
  { code: 'EDI', city: 'Edimburgo', country: 'Reino Unido', name: 'Edinburgh', major: false },
  { code: 'GLA', city: 'Glasgow', country: 'Reino Unido', name: 'Glasgow', major: false },
  { code: 'BHX', city: 'Birmingham', country: 'Reino Unido', name: 'Birmingham', major: false },
  { code: 'BRS', city: 'Bristol', country: 'Reino Unido', name: 'Bristol', major: false },

  // Alemanha
  { code: 'FRA', city: 'Frankfurt', country: 'Alemanha', name: 'Frankfurt am Main', major: true },
  { code: 'MUC', city: 'Munique', country: 'Alemanha', name: 'Franz Josef Strauss', major: true },
  { code: 'BER', city: 'Berlim', country: 'Alemanha', name: 'Berlin Brandenburg', major: true },
  { code: 'DUS', city: 'Düsseldorf', country: 'Alemanha', name: 'Düsseldorf', major: false },
  { code: 'HAM', city: 'Hamburgo', country: 'Alemanha', name: 'Hamburg', major: false },
  { code: 'STR', city: 'Stuttgart', country: 'Alemanha', name: 'Stuttgart', major: false },
  { code: 'CGN', city: 'Colônia', country: 'Alemanha', name: 'Cologne Bonn', major: false },

  // Países Baixos
  { code: 'AMS', city: 'Amsterdã', country: 'Países Baixos', name: 'Schiphol', major: true },
  { code: 'RTM', city: 'Roterdã', country: 'Países Baixos', name: 'Rotterdam The Hague', major: false },

  // Bélgica
  { code: 'BRU', city: 'Bruxelas', country: 'Bélgica', name: 'Brussels', major: true },
  { code: 'CRL', city: 'Charleroi', country: 'Bélgica', name: 'Brussels South Charleroi', major: false },

  // Suíça
  { code: 'ZRH', city: 'Zurique', country: 'Suíça', name: 'Zurich', major: true },
  { code: 'GVA', city: 'Genebra', country: 'Suíça', name: 'Geneva', major: true },
  { code: 'BSL', city: 'Basileia', country: 'Suíça', name: 'EuroAirport Basel-Mulhouse-Freiburg', major: false },

  // Áustria
  { code: 'VIE', city: 'Viena', country: 'Áustria', name: 'Vienna International', major: true },
  { code: 'SZG', city: 'Salzburgo', country: 'Áustria', name: 'Salzburg', major: false },
  { code: 'INN', city: 'Innsbruck', country: 'Áustria', name: 'Innsbruck', major: false },

  // Escandinávia
  { code: 'CPH', city: 'Copenhague', country: 'Dinamarca', name: 'Copenhagen', major: true },
  { code: 'OSL', city: 'Oslo', country: 'Noruega', name: 'Oslo Gardermoen', major: true },
  { code: 'ARN', city: 'Estocolmo', country: 'Suécia', name: 'Stockholm Arlanda', major: true },
  { code: 'GOT', city: 'Gotemburgo', country: 'Suécia', name: 'Göteborg Landvetter', major: false },
  { code: 'HEL', city: 'Helsinque', country: 'Finlândia', name: 'Helsinki-Vantaa', major: true },
  { code: 'KEF', city: 'Reiquiavique', country: 'Islândia', name: 'Keflavik International', major: false },

  // Europa Oriental
  { code: 'WAW', city: 'Varsóvia', country: 'Polônia', name: 'Warsaw Chopin', major: true },
  { code: 'KRK', city: 'Cracóvia', country: 'Polônia', name: 'John Paul II International', major: false },
  { code: 'PRG', city: 'Praga', country: 'Tchéquia', name: 'Václav Havel', major: true },
  { code: 'BUD', city: 'Budapeste', country: 'Hungria', name: 'Budapest Ferenc Liszt', major: true },
  { code: 'OTP', city: 'Bucareste', country: 'Romênia', name: 'Henri Coandă', major: false },
  { code: 'SOF', city: 'Sófia', country: 'Bulgária', name: 'Sofia', major: false },
  { code: 'ATH', city: 'Atenas', country: 'Grécia', name: 'Eleftherios Venizelos', major: true },
  { code: 'SKG', city: 'Salônica', country: 'Grécia', name: 'Thessaloniki Macedonia', major: false },
  { code: 'HER', city: 'Heráclion', country: 'Grécia', name: 'Heraklion Nikos Kazantzakis', major: false },
  { code: 'JTR', city: 'Santorini', country: 'Grécia', name: 'Santorini', major: false },
  { code: 'MYK', city: 'Míconos', country: 'Grécia', name: 'Mykonos', major: false },

  // Turquia
  { code: 'IST', city: 'Istambul', country: 'Turquia', name: 'Istanbul', major: true },
  { code: 'SAW', city: 'Istambul', country: 'Turquia', name: 'Sabiha Gökçen', major: true },
  { code: 'AYT', city: 'Antalya', country: 'Turquia', name: 'Antalya', major: false },
  { code: 'ESB', city: 'Ancara', country: 'Turquia', name: 'Esenboğa', major: false },
  { code: 'ADB', city: 'Esmirna', country: 'Turquia', name: 'Adnan Menderes', major: false },

  // Rússia e ex-URSS
  { code: 'SVO', city: 'Moscou', country: 'Rússia', name: 'Sheremetyevo', major: true },
  { code: 'DME', city: 'Moscou', country: 'Rússia', name: 'Domodedovo', major: true },
  { code: 'LED', city: 'São Petersburgo', country: 'Rússia', name: 'Pulkovo', major: true },
  { code: 'KBP', city: 'Kiev', country: 'Ucrânia', name: 'Boryspil', major: false },

  // Irlanda
  { code: 'DUB', city: 'Dublin', country: 'Irlanda', name: 'Dublin', major: true },
  { code: 'SNN', city: 'Shannon', country: 'Irlanda', name: 'Shannon', major: false },
  { code: 'ORK', city: 'Cork', country: 'Irlanda', name: 'Cork', major: false },

  // ─── ÁSIA ───
  // Oriente Médio
  { code: 'DXB', city: 'Dubai', country: 'Emirados Árabes', name: 'Dubai International', major: true },
  { code: 'AUH', city: 'Abu Dhabi', country: 'Emirados Árabes', name: 'Abu Dhabi International', major: true },
  { code: 'DOH', city: 'Doha', country: 'Catar', name: 'Hamad International', major: true },
  { code: 'RUH', city: 'Riade', country: 'Arábia Saudita', name: 'King Khalid International', major: true },
  { code: 'JED', city: 'Jidá', country: 'Arábia Saudita', name: 'King Abdulaziz International', major: true },
  { code: 'TLV', city: 'Tel Aviv', country: 'Israel', name: 'Ben Gurion', major: true },
  { code: 'AMM', city: 'Amã', country: 'Jordânia', name: 'Queen Alia International', major: false },
  { code: 'BEY', city: 'Beirute', country: 'Líbano', name: 'Rafic Hariri International', major: false },
  { code: 'BAH', city: 'Manama', country: 'Bahrein', name: 'Bahrain International', major: false },
  { code: 'MCT', city: 'Mascate', country: 'Omã', name: 'Muscat International', major: false },
  { code: 'KWI', city: 'Kuwait', country: 'Kuwait', name: 'Kuwait International', major: false },

  // Ásia do Sul
  { code: 'DEL', city: 'Nova Delhi', country: 'Índia', name: 'Indira Gandhi International', major: true },
  { code: 'BOM', city: 'Mumbai', country: 'Índia', name: 'Chhatrapati Shivaji Maharaj', major: true },
  { code: 'BLR', city: 'Bengaluru', country: 'Índia', name: 'Kempegowda International', major: true },
  { code: 'MAA', city: 'Chennai', country: 'Índia', name: 'Chennai International', major: false },
  { code: 'CCU', city: 'Calcutá', country: 'Índia', name: 'Netaji Subhas Chandra Bose', major: false },
  { code: 'HYD', city: 'Hyderabad', country: 'Índia', name: 'Rajiv Gandhi International', major: false },
  { code: 'COK', city: 'Cochin', country: 'Índia', name: 'Cochin International', major: false },
  { code: 'GOI', city: 'Goa', country: 'Índia', name: 'Goa International', major: false },
  { code: 'CMB', city: 'Colombo', country: 'Sri Lanka', name: 'Bandaranaike International', major: false },
  { code: 'MLE', city: 'Malé', country: 'Maldivas', name: 'Velana International', major: false },
  { code: 'KTM', city: 'Katmandu', country: 'Nepal', name: 'Tribhuvan International', major: false },
  { code: 'DAC', city: 'Daca', country: 'Bangladesh', name: 'Hazrat Shahjalal International', major: false },
  { code: 'KHI', city: 'Carachi', country: 'Paquistão', name: 'Jinnah International', major: false },
  { code: 'ISB', city: 'Islamabad', country: 'Paquistão', name: 'Islamabad International', major: false },

  // Sudeste Asiático
  { code: 'SIN', city: 'Singapura', country: 'Singapura', name: 'Changi', major: true },
  { code: 'BKK', city: 'Bangkok', country: 'Tailândia', name: 'Suvarnabhumi', major: true },
  { code: 'DMK', city: 'Bangkok', country: 'Tailândia', name: 'Don Mueang', major: false },
  { code: 'HKT', city: 'Phuket', country: 'Tailândia', name: 'Phuket International', major: false },
  { code: 'CNX', city: 'Chiang Mai', country: 'Tailândia', name: 'Chiang Mai International', major: false },
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malásia', name: 'Kuala Lumpur International', major: true },
  { code: 'PEN', city: 'Penang', country: 'Malásia', name: 'Penang International', major: false },
  { code: 'CGK', city: 'Jacarta', country: 'Indonésia', name: 'Soekarno-Hatta', major: true },
  { code: 'DPS', city: 'Bali', country: 'Indonésia', name: 'Ngurah Rai', major: true },
  { code: 'SUB', city: 'Surabaya', country: 'Indonésia', name: 'Juanda', major: false },
  { code: 'MNL', city: 'Manila', country: 'Filipinas', name: 'Ninoy Aquino International', major: true },
  { code: 'CEB', city: 'Cebu', country: 'Filipinas', name: 'Mactan-Cebu International', major: false },
  { code: 'SGN', city: 'Ho Chi Minh', country: 'Vietnã', name: 'Tan Son Nhat', major: true },
  { code: 'HAN', city: 'Hanói', country: 'Vietnã', name: 'Noi Bai', major: true },
  { code: 'DAD', city: 'Da Nang', country: 'Vietnã', name: 'Da Nang International', major: false },
  { code: 'REP', city: 'Siem Reap', country: 'Camboja', name: 'Siem Reap-Angkor International', major: false },
  { code: 'PNH', city: 'Phnom Penh', country: 'Camboja', name: 'Phnom Penh International', major: false },
  { code: 'RGN', city: 'Yangon', country: 'Mianmar', name: 'Yangon International', major: false },
  { code: 'VTE', city: 'Vientiane', country: 'Laos', name: 'Wattay International', major: false },

  // Leste Asiático
  { code: 'HKG', city: 'Hong Kong', country: 'Hong Kong', name: 'Hong Kong International', major: true },
  { code: 'PEK', city: 'Pequim', country: 'China', name: 'Beijing Capital', major: true },
  { code: 'PKX', city: 'Pequim', country: 'China', name: 'Beijing Daxing', major: true },
  { code: 'PVG', city: 'Xangai', country: 'China', name: 'Shanghai Pudong', major: true },
  { code: 'SHA', city: 'Xangai', country: 'China', name: 'Shanghai Hongqiao', major: true },
  { code: 'CAN', city: 'Guangzhou', country: 'China', name: 'Guangzhou Baiyun', major: true },
  { code: 'SZX', city: 'Shenzhen', country: 'China', name: 'Shenzhen Baoan', major: true },
  { code: 'CTU', city: 'Chengdu', country: 'China', name: 'Chengdu Shuangliu', major: false },
  { code: 'CKG', city: 'Chongqing', country: 'China', name: 'Chongqing Jiangbei', major: false },
  { code: 'XIY', city: "Xi'an", country: 'China', name: "Xi'an Xianyang", major: false },
  { code: 'NKG', city: 'Nanjing', country: 'China', name: 'Nanjing Lukou', major: false },
  { code: 'HGH', city: 'Hangzhou', country: 'China', name: 'Hangzhou Xiaoshan', major: false },
  { code: 'MFM', city: 'Macau', country: 'Macau', name: 'Macau International', major: false },
  { code: 'TPE', city: 'Taipei', country: 'Taiwan', name: 'Taiwan Taoyuan', major: true },
  { code: 'TSA', city: 'Taipei', country: 'Taiwan', name: 'Songshan', major: false },
  { code: 'NRT', city: 'Tóquio', country: 'Japão', name: 'Narita', major: true },
  { code: 'HND', city: 'Tóquio', country: 'Japão', name: 'Haneda', major: true },
  { code: 'KIX', city: 'Osaka', country: 'Japão', name: 'Kansai', major: true },
  { code: 'ITM', city: 'Osaka', country: 'Japão', name: 'Itami', major: false },
  { code: 'NGO', city: 'Nagoya', country: 'Japão', name: 'Chubu Centrair', major: false },
  { code: 'FUK', city: 'Fukuoka', country: 'Japão', name: 'Fukuoka', major: false },
  { code: 'CTS', city: 'Sapporo', country: 'Japão', name: 'New Chitose', major: false },
  { code: 'OKA', city: 'Okinawa', country: 'Japão', name: 'Naha', major: false },
  { code: 'ICN', city: 'Seul', country: 'Coreia do Sul', name: 'Incheon', major: true },
  { code: 'GMP', city: 'Seul', country: 'Coreia do Sul', name: 'Gimpo', major: false },
  { code: 'PUS', city: 'Busan', country: 'Coreia do Sul', name: 'Gimhae', major: false },
  { code: 'CJU', city: 'Jeju', country: 'Coreia do Sul', name: 'Jeju International', major: false },
  { code: 'UBN', city: 'Ulaanbaatar', country: 'Mongólia', name: 'Chinggis Khaan', major: false },

  // ─── OCEANIA ───
  { code: 'SYD', city: 'Sydney', country: 'Austrália', name: 'Sydney Kingsford Smith', major: true },
  { code: 'MEL', city: 'Melbourne', country: 'Austrália', name: 'Melbourne', major: true },
  { code: 'BNE', city: 'Brisbane', country: 'Austrália', name: 'Brisbane', major: true },
  { code: 'PER', city: 'Perth', country: 'Austrália', name: 'Perth', major: false },
  { code: 'ADL', city: 'Adelaide', country: 'Austrália', name: 'Adelaide', major: false },
  { code: 'CNS', city: 'Cairns', country: 'Austrália', name: 'Cairns', major: false },
  { code: 'OOL', city: 'Gold Coast', country: 'Austrália', name: 'Gold Coast', major: false },
  { code: 'AKL', city: 'Auckland', country: 'Nova Zelândia', name: 'Auckland', major: true },
  { code: 'WLG', city: 'Wellington', country: 'Nova Zelândia', name: 'Wellington', major: false },
  { code: 'CHC', city: 'Christchurch', country: 'Nova Zelândia', name: 'Christchurch', major: false },
  { code: 'ZQN', city: 'Queenstown', country: 'Nova Zelândia', name: 'Queenstown', major: false },
  { code: 'NAN', city: 'Nadi', country: 'Fiji', name: 'Nadi International', major: false },
  { code: 'PPT', city: 'Papeete', country: 'Polinésia Francesa', name: "Fa'a'ā International", major: false },
  { code: 'NOU', city: 'Nouméa', country: 'Nova Caledônia', name: 'La Tontouta', major: false },

  // ─── ÁFRICA ───
  { code: 'JNB', city: 'Joanesburgo', country: 'África do Sul', name: 'O. R. Tambo', major: true },
  { code: 'CPT', city: 'Cidade do Cabo', country: 'África do Sul', name: 'Cape Town', major: true },
  { code: 'DUR', city: 'Durban', country: 'África do Sul', name: 'King Shaka', major: false },
  { code: 'CAI', city: 'Cairo', country: 'Egito', name: 'Cairo International', major: true },
  { code: 'HRG', city: 'Hurghada', country: 'Egito', name: 'Hurghada International', major: false },
  { code: 'SSH', city: 'Sharm el-Sheikh', country: 'Egito', name: 'Sharm El Sheikh', major: false },
  { code: 'LXR', city: 'Luxor', country: 'Egito', name: 'Luxor International', major: false },
  { code: 'CMN', city: 'Casablanca', country: 'Marrocos', name: 'Mohammed V', major: true },
  { code: 'RAK', city: 'Marrakech', country: 'Marrocos', name: 'Menara', major: false },
  { code: 'TNG', city: 'Tânger', country: 'Marrocos', name: 'Ibn Batouta', major: false },
  { code: 'FEZ', city: 'Fès', country: 'Marrocos', name: 'Fès–Saïs', major: false },
  { code: 'ALG', city: 'Argel', country: 'Argélia', name: 'Houari Boumediene', major: false },
  { code: 'TUN', city: 'Túnis', country: 'Tunísia', name: 'Tunis-Carthage', major: false },
  { code: 'NBO', city: 'Nairobi', country: 'Quênia', name: 'Jomo Kenyatta', major: true },
  { code: 'MBA', city: 'Mombasa', country: 'Quênia', name: 'Moi International', major: false },
  { code: 'ADD', city: 'Adis Abeba', country: 'Etiópia', name: 'Bole International', major: true },
  { code: 'DAR', city: 'Dar es Salaam', country: 'Tanzânia', name: 'Julius Nyerere', major: false },
  { code: 'ZNZ', city: 'Zanzibar', country: 'Tanzânia', name: 'Abeid Amani Karume', major: false },
  { code: 'JRO', city: 'Kilimanjaro', country: 'Tanzânia', name: 'Kilimanjaro International', major: false },
  { code: 'EBB', city: 'Entebbe', country: 'Uganda', name: 'Entebbe International', major: false },
  { code: 'KGL', city: 'Kigali', country: 'Ruanda', name: 'Kigali International', major: false },
  { code: 'LOS', city: 'Lagos', country: 'Nigéria', name: 'Murtala Muhammed', major: true },
  { code: 'ABJ', city: 'Abidjan', country: 'Costa do Marfim', name: 'Félix-Houphouët-Boigny', major: false },
  { code: 'ACC', city: 'Acra', country: 'Gana', name: 'Kotoka', major: false },
  { code: 'DSS', city: 'Dacar', country: 'Senegal', name: 'Blaise Diagne', major: false },
  { code: 'LAD', city: 'Luanda', country: 'Angola', name: 'Quatro de Fevereiro', major: false },
  { code: 'MPM', city: 'Maputo', country: 'Moçambique', name: 'Maputo International', major: false },
  { code: 'WDH', city: 'Windhoek', country: 'Namíbia', name: 'Hosea Kutako', major: false },
  { code: 'VFA', city: 'Victoria Falls', country: 'Zimbábue', name: 'Victoria Falls', major: false },
  { code: 'LLW', city: 'Lilongwe', country: 'Malaui', name: 'Kamuzu International', major: false },
  { code: 'LUN', city: 'Lusaka', country: 'Zâmbia', name: 'Kenneth Kaunda', major: false },
  { code: 'SEZ', city: 'Mahé', country: 'Seychelles', name: 'Seychelles International', major: false },
  { code: 'MRU', city: 'Maurícia', country: 'Maurícia', name: 'Sir Seewoosagur Ramgoolam', major: false },
  { code: 'TNR', city: 'Antananarivo', country: 'Madagascar', name: 'Ivato International', major: false }
];

// Combinar Brasil (para origem) com lista completa para busca mundial (destino)
// Brasil também aparece no mundo para permitir destino nacional
const AIRPORTS_WORLD_FULL = [...AIRPORTS_BRAZIL, ...AIRPORTS_WORLD];

// Exportar para uso no HTML
if (typeof window !== 'undefined') {
  window.AIRPORTS_BRAZIL = AIRPORTS_BRAZIL;
  window.AIRPORTS_WORLD = AIRPORTS_WORLD_FULL;
}
