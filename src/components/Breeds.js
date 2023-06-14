import React from "react";
import { useEffect, useInsertionEffect, useState } from "react";
import Cocktail from "./Cocktail";
import "../styles/main.css";
import Button from 'react-bootstrap/Button';

function Breeds(props) {
  const [starterDogArray, setStarterDogArray] = useState([]);
  const [currentDogBreed, setCurrentDogBreed] = useState("");
  const [currentDogBreedPercentage, setCurrentDogBreedPercentage] =
    useState("");
	const [totalPercentage, setTotalPercentage] = useState(0);
	const dogBreeds = [
		  "Affenpinscher",
		  "Afghan Hound",
		  "Africanis",
		  "Aidi",
		  "Airedale Terrier",
		  "Akbash",
		  "Akita",
		  "Aksaray Malaklisi",
		  "Alano Español",
		  "Alapaha Blue Blood Bulldog",
		  "Alaskan Husky",
		  "Alaskan Klee Kai",
		  "Alaskan Malamute",
		  "Alopekis",
		  "Alpine Dachsbracke",
		  "American Bulldog",
		  "American Bully",
		  "American Cocker Spaniel",
		  "American English Coonhound",
		  "American Eskimo Dog",
		  "American Foxhound",
		  "American Hairless Terrier",
		  "American Leopard Hound",
		  "American Pit Bull Terrier",
		  "American Staffordshire Terrier",
		  "American Water Spaniel",
		  "Anglo-Français de Petite Vénerie",
		  "Appenzeller Sennenhund",
		  "Ariège Pointer",
		  "Ariegeois",
		  "Armant",
		  "Armenian Gampr",
		  "Artois Hound",
		  "Assyrian Mastiff",
		  "Australian Cattle Dog",
		  "Australian Kelpie",
		  "Australian Shepherd",
		  "Australian Stumpy Tail Cattle Dog",
		  "Australian Terrier",
		  "Austrian Black and Tan Hound",
		  "Austrian Pinscher",
		  "Azawakh",
		  "Bắc Hà dog",
		  "Bakharwal dog",
		  "Banjara Hound",
		  "Bankhar Dog",
		  "Barak hound",
		  "Barbado da Terceira",
		  "Barbet",
		  "Basenji",
		  "Basque Shepherd Dog",
		  "Basset Artésien Normand",
		  "Basset Bleu de Gascogne",
		  "Basset Fauve de Bretagne",
		  "Basset Hound",
		  "Bavarian Mountain Hound",
		  "Beagle",
		  "Beagle-Harrier",
		  "Bearded Collie",
		  "Beauceron",
		  "Bedlington Terrier",
		  "Belgian Shepherd",
		  "Bergamasco Shepherd",
		  "Berger Picard",
		  "Bernese Mountain Dog",
		  "Bichon Frisé",
		  "Billy",
		  "Black and Tan Coonhound",
		  "Black Norwegian Elkhound",
		  "Black Russian Terrier",
		  "Black Mouth Cur",
		  "Bloodhound",
		  "Blue Lacy",
		  "Blue Picardy Spaniel",
		  "Bluetick Coonhound",
		  "Boerboel",
		  "Bohemian Shepherd",
		  "Bolognese",
		  "Border Collie",
		  "Border Terrier",
		  "Borzoi",
		  "Boston Terrier",
		  "Bouvier des Ardennes",
		  "Bouvier des Flandres",
		  "Boxer",
		  "Boykin Spaniel",
		  "Bracco Italiano",
		  "Braque d'Auvergne",
		  "Braque du Bourbonnais",
		  "Braque Français",
		  "Braque Saint-Germain",
		  "Briard",
		  "Briquet Griffon Vendéen",
		  "Brittany",
		  "Broholmer",
		  "Bruno Jura Hound",
		  "Brussels Griffon",
		  "Bucovina Shepherd Dog",
		  "Bull Arab",
		  "Bull Terrier",
		  "Bulldog",
		  "Bullmastiff",
		  "Bully Kutta",
		  "Burgos Pointer",
		  "Ca Mè Mallorquí",
		  "Ca de Bou",
		  "Cairn Terrier",
		  "Calupoh",
		  "Campeiro Bulldog",
		  "Can de Chira",
		  "Can de Palleiro",
		  "Canaan Dog",
		  "Canadian Eskimo Dog",
		  "Cane Corso",
		  "Cane di Oropa",
		  "Cane Paratore",
		  "Cantabrian Water Dog",
		  "Cão da Serra de Aires",
		  "Cão de Castro Laboreiro",
		  "Cão de Gado Transmontano",
		  "Cão Fila de São Miguel",
		  "Cardigan Welsh Corgi",
		  "Carea Castellano Manchego",
		  "Carea Leonés",
		  "Carolina Dog",
		  "Carpathian Shepherd Dog",
		  "Catahoula Leopard Dog",
		  "Catalan Sheepdog",
		  "Caucasian Shepherd Dog",
		  "Cavalier King Charles Spaniel",
		  "Central Asian Shepherd Dog",
		  "Cesky Fousek",
		  "Cesky Terrier",
		  "Chesapeake Bay Retriever",
		  "Chien Français Blanc et Noir",
		  "Chien Français Blanc et Orange",
		  "Chien Français Tricolore",
		  "Chihuahua",
		  "Chilean Terrier",
		  "Chinese Crested Dog",
		  "Chinook",
		  "Chippiparai",
		  "Chongqing dog",
		  "Chortai",
		  "Chow Chow",
		  "Chukotka sled dog",
		  "Cimarrón Uruguayo",
		  "Cirneco dell'Etna",
		  "Classic Dingo",
		  "Clumber Spaniel",
		  "Colombian fino hound",
		  "Continental bulldog",
		  "Coton de Tuléar",
		  "Cretan Hound",
		  "Croatian Sheepdog",
		  "Curly-Coated Retriever",
		  "Cursinu",
		  "Czechoslovakian Wolfdog",
		  "Dachshund",
		  "Dalmatian",
		  "Dandie Dinmont Terrier",
		  "Danish Spitz",
		  "Danish-Swedish Farmdog",
		  "Denmark Feist",
		  "Dingo",
		  "Dobermann",
		  "Dogo Argentino",
		  "Dogo Guatemalteco",
		  "Dogo Sardesco",
		  "Dogue Brasileiro",
		  "Dogue de Bordeaux",
		  "Donggyeongi",
		  "Drentse Patrijshond",
		  "Drever",
		  "Dunker",
		  "Dutch Shepherd",
		  "Dutch Smoushond",
		  "East Siberian Laika",
		  "East European Shepherd",
		  "Ecuadorian Hairless Dog",
		  "English Cocker Spaniel",
		  "English Foxhound",
		  "English Mastiff",
		  "English Setter",
		  "English Shepherd",
		  "English Springer Spaniel",
		  "English Toy Terrier (Black & Tan)",
		  "Entlebucher Mountain Dog",
		  "Estonian Hound",
		  "Estrela Mountain Dog",
		  "Eurasier",
		  "Field Spaniel",
		  "Fila Brasileiro",
		  "Finnish Hound",
		  "Finnish Lapphund",
		  "Finnish Spitz",
		  "Flat-Coated Retriever",
		  "French Bulldog",
		  "French Spaniel",
		  "Galgo Español",
		  "Garafian Shepherd",
		  "Gascon Saintongeoi",
		  "Georgian Shepherd",
		  "German Hound",
		  "German Longhaired Pointer",
		  "German Pinsch",
		  "German Roughhaired Pointer",
		  "German Shepherd",
		  "German Shorthaired Pointer",
		  "German Spaniel",
		  "German Spitz",
		  "German Wirehaired Pointer",
		  "Giant Schnauzer",
		  "Glen of Imaal Terrier",
		  "Golden Retriever",
		  "Gończy Polski",
		  "Gordon Setter",
		  "Grand Anglo-Français Blanc et Noir",
		  "Grand Anglo-Français Blanc et Orange",
		  "Grand Anglo-Français Tricolore",
		  "Grand Basset Griffon Vendéen",
		  "Grand Bleu de Gascogne",
		  "Grand Griffon Vendéen",
		  "Great Dane",
		  "Greater Swiss Mountain Dog",
		  "Greek Harehound",
		  "Greek Shepherd",
		  "Greenland Dog",
		  "Greyhound",
		  "Griffon Bleu de Gascogne",
		  "Griffon Fauve de Bretagne",
		  "Griffon Nivernais",
		  "Gull Dong",
		  "Gull Terrier",
		  "Hällefors Elkhound",
		  "Halden Hound",
		  "Hamiltonstövare",
		  "Hanover Hound",
		  "Harrier",
		  "Havanese",
		  "Himalayan Sheepdog",
		  "Hierran Wolfdog",
		  "Hmong bobtail dog",
		  "Hokkaido",
		  "Hovawart",
		  "Huntaway",
		  "Hygen Hound",
		  "Ibizan Hound",
		  "Icelandic Sheepdog",
		  "Indian pariah dog",
		  "Indian Spitz",
		  "Irish Red and White Setter",
		  "Irish Setter",
		  "Irish Terrier",
		  "Irish Water Spaniel",
		  "Irish Wolfhound",
		  "Istrian Coarse-haired Hound",
		  "Istrian Shorthaired Hound",
		  "Greyhound",
		  "Jack Russell Terrier",
		  "Jagdterrier",
		  "Jämthund",
		  "Japanese Chin",
		  "Japanese Spitz",
		  "Japanese Terrier",
		  "Jindo",
		  "Jonangi",
		  "Kai Ken",
		  "Kaikadi",
		  "Kangal Shepherd Dog",
		  "Kanni",
		  "Karakachan dog",
		  "Karelian Bear Dog",
		  "Kars",
		  "Karst Shepherd",
		  "Keeshond",
		  "Kerry Beagle",
		  "Kerry Blue Terrier",
		  "Khala",
		  "King Charles Spaniel",
		  "King Shepherd",
		  "Kintamani",
		  "Kishu",
		  "Kokoni",
		  "Kombai",
		  "Komondor",
		  "Kooikerhondje",
		  "Koolie",
		  "Koyun dog",
		  "Kromfohrländer",
		  "Kuchi",
		  "Kunming dog",
		  "Kurdish Mastiff",
		  "Kuvasz",
		  "Labrador Retriever",
		  "Lagotto Romagnolo",
		  "Lakeland Terrier",
		  "Lancashire Heeler",
		  "Landseer",
		  "Lapponian Herder",
		  "Large Münsterländer",
		  "Leonberger",
		  "Levriero Sardo",
		  "Lhasa Apso",
		  "Liangshan Dog",
		  "Lithuanian Hound",
		  "Lobito Herreño",
		  "Löwchen",
		  "Lupo Italiano",
		  "Mackenzie River husky",
		  "Magyar agár",
		  "Mahratta Greyhound",
		  "Maltese",
		  "Manchester Terrier",
		  "Maneto",
		  "Maremmano-Abruzzese Sheepdog",
		  "McNab dog",
		  "Miniature American Shepherd",
		  "Miniature Bull Terrier",
		  "Miniature Fox Terrier",
		  "Miniature Pinscher",
		  "Miniature Schnauzer",
		  "Molossus of Epirus",
		  "Mongrel",
		  "Montenegrin Mountain Hound",
		  "Mountain Cur",
		  "Mountain Feist",
		  "Mucuchies",
		  "Mudhol Hound",
		  "Mudi",
		  "Neapolitan Mastiff",
		  "Nenets Herding Laika",
		  "New Guinea singing dog",
		  "New Zealand Heading Dog",
		  "Newfoundland",
		  "Norfolk Terrier",
		  "Norrbottenspets",
		  "Northern Inuit Dog",
		  "Norwegian Buhund",
		  "Norwegian Elkhound",
		  "Norwegian Lundehund",
		  "Norwich Terrier",
		  "Nova Scotia Duck Tolling Retriever",
		  "Old Danish Pointer",
		  "Old English Sheepdog",
		  "Old English Terrier",
		  "Olde English Bulldogge",
		  "Otterhound",
		  "Pachon Navarro",
		  "Pampas Deerhound",
		  "Papillon",
		  "Parson Russell Terrier",
		  "Pastore della Lessinia' e del Lagorai",
		  "Patagonian Sheepdog",
		  "Patterdale Terrier",
		  "Pekingese",
		  "Pembroke Welsh Corgi",
		  "Perro Majorero",
		  "Perro de Pastor Mallorquin",
		  "Perro de Presa Canario",
		  "Perro de Presa Mallorquin",
		  "Peruvian Inca Orchid",
		  "Petit Basset Griffon Vendéen",
		  "Petit Bleu de Gascogne",
		  "Phalène",
		  "Pharaoh Hound",
		  "Phu Quoc Ridgeback",
		  "Picardy Spaniel",
		  "Plummer Terrier",
		  "Plott Hound",
		  "Podenco Andaluz",
		  "Podenco Canario",
		  "Podenco Valenciano",
		  "Pointer",
		  "Poitevin",
		  "Polish Greyhound",
		  "Polish Hound",
		  "Polish Lowland Sheepdog",
		  "Polish Tatra Sheepdog",
		  "Pomeranian",
		  "Pont-Audemer Spaniel",
		  "Poodle",
		  "Porcelaine",
		  "Portuguese Podengo",
		  "Portuguese Pointer",
		  "Portuguese Water Dog",
		  "Posavac Hound",
		  "Pražský Krysařík",
		  "Pudelpointer",
		  "Pug",
		  "Puli",
		  "Pumi",
		  "Pungsan dog",
		  "Pyrenean Mastiff",
		  "Pyrenean Mountain Dog",
		  "Pyrenean Sheepdog",
		  "Rafeiro do Alentejo",
		  "Rajapalayam",
		  "Rampur Greyhound",
		  "Rat Terrier",
		  "Ratonero Bodeguero Andaluz",
		  "Ratonero Mallorquin",
		  "Ratonero Murciano",
		  "Ratonero Valenciano",
		  "Redbone Coonhound",
		  "Rhodesian Ridgeback",
		  "Romanian Mioritic Shepherd Dog",
		  "Romanian Raven Shepherd Dog",
		  "Rottweiler",
		  "Rough Collie",
		  "Russian Spaniel",
		  "Russian Toy",
		  "Russo-European Laika",
		  "Ryukyu Inu",
		  "Saarloos Wolfdog",
		  "Sabueso Español",
		  "Saint Bernard",
		  "Saint Hubert Jura Hound",
		  "Saint Miguel Cattle Dog",
		  "Saint-Usuge Spaniel",
		  "Saluki",
		  "Samoyed",
		  "Sapsali",
		  "Sarabi dog",
		  "Sardinian Shepherd Dog",
		  "Šarplaninac",
		  "Schapendoes",
		  "Schillerstövare",
		  "Schipperke",
		  "Schweizer Laufhund",
		  "Schweizerischer Niederlaufhund",
		  "Scottish Deerhound",
		  "Scottish Terrier",
		  "Sealyham Terrier",
		  "Segugio dell'Appennino",
		  "Segugio Italiano",
		  "Segugio Maremmano",
		  "Serbian Hound",
		  "Serbian Tricolour Hound",
		  "Serrano Bulldog",
		  "Shar Pei",
		  "Shetland Sheepdog",
		  "Shiba Inu",
		  "Shih Tzu",
		  "Shikoku",
		  "Shiloh Shepherd",
		  "Siberian Husky",
		  "Silken Windhound",
		  "Silky Terrier",
		  "Sinhala Hound",
		  "Skye Terrier",
		  "Sloughi",
		  "Slovakian Wirehaired Pointer",
		  "Slovenský Cuvac",
		  "Slovenský Kopov",
		  "Smalandstövare",
		  "Small Greek domestic dog",
		  "Small Münsterländer",
		  "Smithfield",
		  "Smooth Collie",
		  "Smooth Fox Terrier",
		  "Soft-Coated Wheaten Terrier",
		  "South Russian Ovcharka",
		  "Spanish Mastiff",
		  "Spanish Water Dog",
		  "Spino degli Iblei",
		  "Spinone Italiano",
		  "Sporting Lucas Terrier",
		  "Stabyhoun",
		  "Staffordshire Bull Terrier",
		  "Standard Schnauzer",
		  "Stephens Stock",
		  "Styrian Coarse-haired Hound",
		  "Sussex Spaniel",
		  "Swedish Lapphund",
		  "Swedish Vallhund",
		  "Swinford Bandog",
		  "Taigan",
		  "Taiwan Dog",
		  "Tamaskan Dog",
		  "Tang Dog",
		  "Tarsus çatalburun",
		  "Tazy",
		  "Teddy Roosevelt Terrier",
		  "Telomian",
		  "Tenterfield Terrier",
		  "Terrier Brasileiro",
		  "Thai Bangkaew Dog",
		  "Thai Ridgeback",
		  "Tibetan Kyi Apso",
		  "Tibetan Mastiff",
		  "Tibetan Spaniel",
		  "Tibetan Terrier",
		  "Tonya Finosu",
		  "Torkuz",
		  "Tornjak",
		  "Tosa Inu",
		  "Toy Fox Terrier",
		  "Toy Manchester Terrier",
		  "Transylvanian Hound",
		  "Treeing Cur",
		  "Treeing Feist",
		  "Treeing Tennessee Brindle",
		  "Treeing Walker Coonhound",
		  "Trigg Hound",
		  "Tyrolean Hound",
		  "Vikhan",
		  "Villano de Las Encartaciones",
		  "Villanuco de Las Encartaciones",
		  "Vizsla",
		  "Volkosob",
		  "Volpino Italiano",
		  "Weimaraner",
		  "Welsh Hound",
		  "Welsh Sheepdog",
		  "Welsh Springer Spaniel",
		  "Welsh Terrier",
		  "West Country Harrier",
		  "West Highland White Terrier",
		  "West Siberian Laika",
		  "Westphalian Dachsbracke",
		  "Wetterhoun",
		  "Whippet",
		  "White Shepherd",
		  "White Swiss Shepherd Dog",
		  "Wire Fox Terrier",
		  "Wirehaired Pointing Griffon",
		  "Wirehaired Vizsla",
		  "Xiasi Dog",
		  "Xoloitzcuintle",
		  "Yakutian Laika",
		  "Yorkshire Terrier",
		  "Zerdava",
		  "Other",
		];

  const handleAddBreedPartForm = (e) => {
    e.preventDefault();
    // console.log(starterDogArray)
    const additionalDogBreed = {
      breedName: currentDogBreed,
      percentage: currentDogBreedPercentage,
    };
    starterDogArray.push(additionalDogBreed);
    setStarterDogArray([...starterDogArray]);
    setTotalPercentage(
      Number(totalPercentage) + Number(additionalDogBreed.percentage)
    );
    setCurrentDogBreed("Affenpinscher");
    setCurrentDogBreedPercentage("");
    // console.log(starterDogArray);
  };
  const clearItem = (STA) => {
	// console.log("test" + starterDogArray.indexOf(STA))
	starterDogArray.splice(starterDogArray.indexOf(STA), 1);
	setStarterDogArray([...starterDogArray])
	setTotalPercentage(
		Number(totalPercentage) - Number(STA.percentage)
	  );
  }
  const clearList = () => {
    //   console.log("test")
    setStarterDogArray([]);
	setTotalPercentage(0)
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleAddBreedPartForm}>
          <div>
            <p>Choose your breeds:</p>
            <select
              placeholder="Select your breed"
              value={currentDogBreed}
              onChange={(e) => setCurrentDogBreed(e.target.value)}
            >
              {dogBreeds.map((DB, i) => {
                return <option key={"breed " + i}>{DB}</option>;
              })}
            </select>
            <input
              type="number"
              placeholder="Percentage of breed"
              value={currentDogBreedPercentage}
              onChange={(e) => setCurrentDogBreedPercentage(e.target.value)}
            />
          </div>
          <button>Add</button>
        </form>
		</div>
		<div>
        <div className="current-dog-container">
          <h2>Your Current Dog:</h2>
		  {(starterDogArray.length > 0) ? 
		  <div className="mb-2">
        <Button onClick={() => clearList()} variant="primary" size="lg">
          Clear List
        </Button>{' '} </div> : <button style={{display:"none"}}></button>}
          {starterDogArray.map((STA, i) => {
            return (
              <div className="current-dog-makeup" key={"a" + i}>
                <p key={"b" + i}>
                  {STA.breedName} - {STA.percentage}%
                </p>
				<button className="delete-item-btn" onClick={() => clearItem(STA)}>&times;</button>
              </div>
            );
          })}
          <p>
            <strong>Total Dog Breed Makeup: {totalPercentage}%</strong>
          </p>
          {/* <button onClick={() => clearList()}>Clear List</button> */}
        </div>
        <Cocktail breedMakeupArray={starterDogArray} dogBreeds={dogBreeds} />
      </div>
    </>
  );
}

export default Breeds;
