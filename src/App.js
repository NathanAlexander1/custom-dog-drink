import Breeds from "./components/Breeds";
import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dogBreeds = [
    {
      name: "Affenpinscher",
      image: "https://www.dog.com/Breeds/images/AllBreeds/21.jpg",
    },
    {
      name: "Afghan Hound",
      image:
        "https://m8r6w9i6.rocketcdn.me/wp-content/uploads/2017/01/Afghan-Hound.jpeg",
    },
    {
      name: "Africanis",
      image: "https://dogell.b-cdn.net/uploads/breed/thumb_africanis.jpg",
    },
    {
        "name": "Aidi",
        "image": ""
    },
    {
        "name": "Airedale Terrier",
        "image": ""
    },
    {
        "name": "Akbash",
        "image": ""
    },
    {
        "name": "Akita",
        "image": ""
    },
    {
        "name": "Aksaray Malaklisi",
        "image": ""
    },
    {
        "name": "Alano Español",
        "image": ""
    },
    {
        "name": "Alapaha Blue Blood Bulldog",
        "image": ""
    },
    {
        "name": "Alaskan Husky",
        "image": ""
    },
    {
        "name": "Alaskan Klee Kai",
        "image": ""
    },
    {
        "name": "Alaskan Malamute",
        "image": ""
    },
    {
        "name": "Alopekis",
        "image": ""
    },
    {
        "name": "Alpine Dachsbracke",
        "image": ""
    },
    {
        "name": "American Bulldog",
        "image": ""
    },
    {
        "name": "American Bully",
        "image": ""
    },
    {
        "name": "American Cocker Spaniel",
        "image": ""
    },
    {
        "name": "American English Coonhound",
        "image": ""
    },
    {
        "name": "American Eskimo Dog",
        "image": ""
    },
    {
        "name": "American Foxhound",
        "image": ""
    },
    {
        "name": "American Hairless Terrier",
        "image": ""
    },
    {
        "name": "American Leopard Hound",
        "image": ""
    },
    {
        "name": "American Pit Bull Terrier",
        "image": ""
    },
    {
        "name": "American Staffordshire Terrier",
        "image": ""
    },
    {
        "name": "American Water Spaniel",
        "image": ""
    },
    {
        "name": "Anglo-Français de Petite Vénerie",
        "image": ""
    },
    {
        "name": "Appenzeller Sennenhund",
        "image": ""
    },
    {
        "name": "Ariège Pointer",
        "image": ""
    },
    {
        "name": "Ariegeois",
        "image": ""
    },
    {
        "name": "Armant",
        "image": ""
    },
    {
        "name": "Armenian Gampr",
        "image": ""
    },
    {
        "name": "Artois Hound",
        "image": ""
    },
    {
        "name": "Assyrian Mastiff",
        "image": ""
    },
    {
        "name": "Australian Cattle Dog",
        "image": ""
    },
    {
        "name": "Australian Kelpie",
        "image": ""
    },
    {
        "name": "Australian Shepherd",
        "image": ""
    },
    {
        "name": "Australian Stumpy Tail Cattle Dog",
        "image": ""
    },
    {
        "name": "Australian Terrier",
        "image": ""
    },
    {
        "name": "Austrian Black and Tan Hound",
        "image": ""
    },
    {
        "name": "Austrian Pinscher",
        "image": ""
    },
    {
        "name": "Azawakh",
        "image": ""
    },
    {
        "name": "Bắc Hà dog",
        "image": ""
    },
    {
        "name": "Bakharwal dog",
        "image": ""
    },
    {
        "name": "Banjara Hound",
        "image": ""
    },
    {
        "name": "Bankhar Dog",
        "image": ""
    },
    {
        "name": "Barak hound",
        "image": ""
    },
    {
        "name": "Barbado da Terceira",
        "image": ""
    },
    {
        "name": "Barbet",
        "image": ""
    },
    {
        "name": "Basenji",
        "image": ""
    },
    {
        "name": "Basque Shepherd Dog",
        "image": ""
    },
    {
        "name": "Basset Artésien Normand",
        "image": ""
    },
    {
        "name": "Basset Bleu de Gascogne",
        "image": ""
    },
    {
        "name": "Basset Fauve de Bretagne",
        "image": ""
    },
    {
        "name": "Basset Hound",
        "image": ""
    },
    {
        "name": "Bavarian Mountain Hound",
        "image": ""
    },
    {
        "name": "Beagle",
        "image": ""
    },
    {
        "name": "Beagle-Harrier",
        "image": ""
    },
    {
        "name": "Bearded Collie",
        "image": ""
    },
    {
        "name": "Beauceron",
        "image": ""
    },
    {
        "name": "Bedlington Terrier",
        "image": ""
    },
    {
        "name": "Belgian Shepherd",
        "image": ""
    },
    {
        "name": "Bergamasco Shepherd",
        "image": ""
    },
    {
        "name": "Berger Picard",
        "image": ""
    },
    {
        "name": "Bernese Mountain Dog",
        "image": ""
    },
    {
        "name": "Bichon Frisé",
        "image": ""
    },
    {
        "name": "Billy",
        "image": ""
    },
    {
        "name": "Black and Tan Coonhound",
        "image": ""
    },
    {
        "name": "Black Norwegian Elkhound",
        "image": ""
    },
    {
        "name": "Black Russian Terrier",
        "image": ""
    },
    {
        "name": "Black Mouth Cur",
        "image": ""
    },
    {
        "name": "Bloodhound",
        "image": ""
    },
    {
        "name": "Blue Lacy",
        "image": ""
    },
    {
        "name": "Blue Picardy Spaniel",
        "image": ""
    },
    {
        "name": "Bluetick Coonhound",
        "image": ""
    },
    {
        "name": "Boerboel",
        "image": ""
    },
    {
        "name": "Bohemian Shepherd",
        "image": ""
    },
    {
        "name": "Bolognese",
        "image": ""
    },
    {
        "name": "Border Collie",
        "image": ""
    },
    {
        "name": "Border Terrier",
        "image": ""
    },
    {
        "name": "Borzoi",
        "image": ""
    },
    {
        "name": "Boston Terrier",
        "image": ""
    },
    {
        "name": "Bouvier des Ardennes",
        "image": ""
    },
    {
        "name": "Bouvier des Flandres",
        "image": ""
    },
    {
        "name": "Boxer",
        "image": ""
    },
    {
        "name": "Boykin Spaniel",
        "image": ""
    },
    {
        "name": "Bracco Italiano",
        "image": ""
    },
    {
        "name": "Braque d'Auvergne",
        "image": ""
    },
    {
        "name": "Braque du Bourbonnais",
        "image": ""
    },
    {
        "name": "Braque Français",
        "image": ""
    },
    {
        "name": "Braque Saint-Germain",
        "image": ""
    },
    {
        "name": "Briard",
        "image": ""
    },
    {
        "name": "Briquet Griffon Vendéen",
        "image": ""
    },
    {
        "name": "Brittany",
        "image": ""
    },
    {
        "name": "Broholmer",
        "image": ""
    },
    {
        "name": "Bruno Jura Hound",
        "image": ""
    },
    {
        "name": "Brussels Griffon",
        "image": ""
    },
    {
        "name": "Bucovina Shepherd Dog",
        "image": ""
    },
    {
        "name": "Bull Arab",
        "image": ""
    },
    {
        "name": "Bull Terrier",
        "image": ""
    },
    {
        "name": "Bulldog",
        "image": ""
    },
    {
        "name": "Bullmastiff",
        "image": ""
    },
    {
        "name": "Bully Kutta",
        "image": ""
    },
    {
        "name": "Burgos Pointer",
        "image": ""
    },
    {
        "name": "Ca Mè Mallorquí",
        "image": ""
    },
    {
        "name": "Ca de Bou",
        "image": ""
    },
    {
        "name": "Cairn Terrier",
        "image": ""
    },
    {
        "name": "Calupoh",
        "image": ""
    },
    {
        "name": "Campeiro Bulldog",
        "image": ""
    },
    {
        "name": "Can de Chira",
        "image": ""
    },
    {
        "name": "Can de Palleiro",
        "image": ""
    },
    {
        "name": "Canaan Dog",
        "image": ""
    },
    {
        "name": "Canadian Eskimo Dog",
        "image": ""
    },
    {
        "name": "Cane Corso",
        "image": ""
    },
    {
        "name": "Cane di Oropa",
        "image": ""
    },
    {
        "name": "Cane Paratore",
        "image": ""
    },
    {
        "name": "Cantabrian Water Dog",
        "image": ""
    },
    {
        "name": "Cão da Serra de Aires",
        "image": ""
    },
    {
        "name": "Cão de Castro Laboreiro",
        "image": ""
    },
    {
        "name": "Cão de Gado Transmontano",
        "image": ""
    },
    {
        "name": "Cão Fila de São Miguel",
        "image": ""
    },
    {
        "name": "Cardigan Welsh Corgi",
        "image": ""
    },
    {
        "name": "Carea Castellano Manchego",
        "image": ""
    },
    {
        "name": "Carea Leonés",
        "image": ""
    },
    {
        "name": "Carolina Dog",
        "image": ""
    },
    {
        "name": "Carpathian Shepherd Dog",
        "image": ""
    },
    {
        "name": "Catahoula Leopard Dog",
        "image": ""
    },
    {
        "name": "Catalan Sheepdog",
        "image": ""
    },
    {
        "name": "Caucasian Shepherd Dog",
        "image": ""
    },
    {
        "name": "Cavalier King Charles Spaniel",
        "image": ""
    },
    {
        "name": "Central Asian Shepherd Dog",
        "image": ""
    },
    {
        "name": "Cesky Fousek",
        "image": ""
    },
    {
        "name": "Cesky Terrier",
        "image": ""
    },
    {
        "name": "Chesapeake Bay Retriever",
        "image": ""
    },
    {
        "name": "Chien Français Blanc et Noir",
        "image": ""
    },
    {
        "name": "Chien Français Blanc et Orange",
        "image": ""
    },
    {
        "name": "Chien Français Tricolore",
        "image": ""
    },
    {
        "name": "Chihuahua",
        "image": ""
    },
    {
        "name": "Chilean Terrier",
        "image": ""
    },
    {
        "name": "Chinese Crested Dog",
        "image": ""
    },
    {
        "name": "Chinook",
        "image": ""
    },
    {
        "name": "Chippiparai",
        "image": ""
    },
    {
        "name": "Chongqing dog",
        "image": ""
    },
    {
        "name": "Chortai",
        "image": ""
    },
    {
        "name": "Chow Chow",
        "image": ""
    },
    {
        "name": "Chukotka sled dog",
        "image": ""
    },
    {
        "name": "Cimarrón Uruguayo",
        "image": ""
    },
    {
        "name": "Cirneco dell'Etna",
        "image": ""
    },
    {
        "name": "Classic Dingo",
        "image": ""
    },
    {
        "name": "Clumber Spaniel",
        "image": ""
    },
    {
        "name": "Colombian fino hound",
        "image": ""
    },
    {
        "name": "Continental bulldog",
        "image": ""
    },
    {
        "name": "Coton de Tuléar",
        "image": ""
    },
    {
        "name": "Cretan Hound",
        "image": ""
    },
    {
        "name": "Croatian Sheepdog",
        "image": ""
    },
    {
        "name": "Curly-Coated Retriever",
        "image": ""
    },
    {
        "name": "Cursinu",
        "image": ""
    },
    {
        "name": "Czechoslovakian Wolfdog",
        "image": ""
    },
    {
        "name": "Dachshund",
        "image": ""
    },
    {
        "name": "Dalmatian",
        "image": ""
    },
    {
        "name": "Dandie Dinmont Terrier",
        "image": ""
    },
    {
        "name": "Danish Spitz",
        "image": ""
    },
    {
        "name": "Danish-Swedish Farmdog",
        "image": ""
    },
    {
        "name": "Denmark Feist",
        "image": ""
    },
    {
        "name": "Dingo",
        "image": ""
    },
    {
        "name": "Dobermann",
        "image": ""
    },
    {
        "name": "Dogo Argentino",
        "image": ""
    },
    {
        "name": "Dogo Guatemalteco",
        "image": ""
    },
    {
        "name": "Dogo Sardesco",
        "image": ""
    },
    {
        "name": "Dogue Brasileiro",
        "image": ""
    },
    {
        "name": "Dogue de Bordeaux",
        "image": ""
    },
    {
        "name": "Donggyeongi",
        "image": ""
    },
    {
        "name": "Drentse Patrijshond",
        "image": ""
    },
    {
        "name": "Drever",
        "image": ""
    },
    {
        "name": "Dunker",
        "image": ""
    },
    {
        "name": "Dutch Shepherd",
        "image": ""
    },
    {
        "name": "Dutch Smoushond",
        "image": ""
    },
    {
        "name": "East Siberian Laika",
        "image": ""
    },
    {
        "name": "East European Shepherd",
        "image": ""
    },
    {
        "name": "Ecuadorian Hairless Dog",
        "image": ""
    },
    {
        "name": "English Cocker Spaniel",
        "image": ""
    },
    {
        "name": "English Foxhound",
        "image": ""
    },
    {
        "name": "English Mastiff",
        "image": ""
    },
    {
        "name": "English Setter",
        "image": ""
    },
    {
        "name": "English Shepherd",
        "image": ""
    },
    {
        "name": "English Springer Spaniel",
        "image": ""
    },
    {
        "name": "English Toy Terrier (Black & Tan)",
        "image": ""
    },
    {
        "name": "Entlebucher Mountain Dog",
        "image": ""
    },
    {
        "name": "Estonian Hound",
        "image": ""
    },
    {
        "name": "Estrela Mountain Dog",
        "image": ""
    },
    {
        "name": "Eurasier",
        "image": ""
    },
    {
        "name": "Field Spaniel",
        "image": ""
    },
    {
        "name": "Fila Brasileiro",
        "image": ""
    },
    {
        "name": "Finnish Hound",
        "image": ""
    },
    {
        "name": "Finnish Lapphund",
        "image": ""
    },
    {
        "name": "Finnish Spitz",
        "image": ""
    },
    {
        "name": "Flat-Coated Retriever",
        "image": ""
    },
    {
        "name": "French Bulldog",
        "image": ""
    },
    {
        "name": "French Spaniel",
        "image": ""
    },
    {
        "name": "Galgo Español",
        "image": ""
    },
    {
        "name": "Garafian Shepherd",
        "image": ""
    },
    {
        "name": "Gascon Saintongeoi",
        "image": ""
    },
    {
        "name": "Georgian Shepherd",
        "image": ""
    },
    {
        "name": "German Hound",
        "image": ""
    },
    {
        "name": "German Longhaired Pointer",
        "image": ""
    },
    {
        "name": "German Pinsch",
        "image": ""
    },
    {
        "name": "German Roughhaired Pointer",
        "image": ""
    },
    {
        "name": "German Shepherd",
        "image": ""
    },
    {
        "name": "German Shorthaired Pointer",
        "image": ""
    },
    {
        "name": "German Spaniel",
        "image": ""
    },
    {
        "name": "German Spitz",
        "image": ""
    },
    {
        "name": "German Wirehaired Pointer",
        "image": ""
    },
    {
        "name": "Giant Schnauzer",
        "image": ""
    },
    {
        "name": "Glen of Imaal Terrier",
        "image": ""
    },
    {
        "name": "Golden Retriever",
        "image": ""
    },
    {
        "name": "Gończy Polski",
        "image": ""
    },
    {
        "name": "Gordon Setter",
        "image": ""
    },
    {
        "name": "Grand Anglo-Français Blanc et Noir",
        "image": ""
    },
    {
        "name": "Grand Anglo-Français Blanc et Orange",
        "image": ""
    },
    {
        "name": "Grand Anglo-Français Tricolore",
        "image": ""
    },
    {
        "name": "Grand Basset Griffon Vendéen",
        "image": ""
    },
    {
        "name": "Grand Bleu de Gascogne",
        "image": ""
    },
    {
        "name": "Grand Griffon Vendéen",
        "image": ""
    },
    {
        "name": "Great Dane",
        "image": ""
    },
    {
        "name": "Greater Swiss Mountain Dog",
        "image": ""
    },
    {
        "name": "Greek Harehound",
        "image": ""
    },
    {
        "name": "Greek Shepherd",
        "image": ""
    },
    {
        "name": "Greenland Dog",
        "image": ""
    },
    {
        "name": "Greyhound",
        "image": ""
    },
    {
        "name": "Griffon Bleu de Gascogne",
        "image": ""
    },
    {
        "name": "Griffon Fauve de Bretagne",
        "image": ""
    },
    {
        "name": "Griffon Nivernais",
        "image": ""
    },
    {
        "name": "Gull Dong",
        "image": ""
    },
    {
        "name": "Gull Terrier",
        "image": ""
    },
    {
        "name": "Hällefors Elkhound",
        "image": ""
    },
    {
        "name": "Halden Hound",
        "image": ""
    },
    {
        "name": "Hamiltonstövare",
        "image": ""
    },
    {
        "name": "Hanover Hound",
        "image": ""
    },
    {
        "name": "Harrier",
        "image": ""
    },
    {
        "name": "Havanese",
        "image": ""
    },
    {
        "name": "Himalayan Sheepdog",
        "image": ""
    },
    {
        "name": "Hierran Wolfdog",
        "image": ""
    },
    {
        "name": "Hmong bobtail dog",
        "image": ""
    },
    {
        "name": "Hokkaido",
        "image": ""
    },
    {
        "name": "Hovawart",
        "image": ""
    },
    {
        "name": "Huntaway",
        "image": ""
    },
    {
        "name": "Hygen Hound",
        "image": ""
    },
    {
        "name": "Ibizan Hound",
        "image": ""
    },
    {
        "name": "Icelandic Sheepdog",
        "image": ""
    },
    {
        "name": "Indian pariah dog",
        "image": ""
    },
    {
        "name": "Indian Spitz",
        "image": ""
    },
    {
        "name": "Irish Red and White Setter",
        "image": ""
    },
    {
        "name": "Irish Setter",
        "image": ""
    },
    {
        "name": "Irish Terrier",
        "image": ""
    },
    {
        "name": "Irish Water Spaniel",
        "image": ""
    },
    {
        "name": "Irish Wolfhound",
        "image": ""
    },
    {
        "name": "Istrian Coarse-haired Hound",
        "image": ""
    },
    {
        "name": "Istrian Shorthaired Hound",
        "image": ""
    },
    {
        "name": "Greyhound",
        "image": ""
    },
    {
        "name": "Jack Russell Terrier",
        "image": ""
    },
    {
        "name": "Jagdterrier",
        "image": ""
    },
    {
        "name": "Jämthund",
        "image": ""
    },
    {
        "name": "Japanese Chin",
        "image": ""
    },
    {
        "name": "Japanese Spitz",
        "image": ""
    },
    {
        "name": "Japanese Terrier",
        "image": ""
    },
    {
        "name": "Jindo",
        "image": ""
    },
    {
        "name": "Jonangi",
        "image": ""
    },
    {
        "name": "Kai Ken",
        "image": ""
    },
    {
        "name": "Kaikadi",
        "image": ""
    },
    {
        "name": "Kangal Shepherd Dog",
        "image": ""
    },
    {
        "name": "Kanni",
        "image": ""
    },
    {
        "name": "Karakachan dog",
        "image": ""
    },
    {
        "name": "Karelian Bear Dog",
        "image": ""
    },
    {
        "name": "Kars",
        "image": ""
    },
    {
        "name": "Karst Shepherd",
        "image": ""
    },
    {
        "name": "Keeshond",
        "image": ""
    },
    {
        "name": "Kerry Beagle",
        "image": ""
    },
    {
        "name": "Kerry Blue Terrier",
        "image": ""
    },
    {
        "name": "Khala",
        "image": ""
    },
    {
        "name": "King Charles Spaniel",
        "image": ""
    },
    {
        "name": "King Shepherd",
        "image": ""
    },
    {
        "name": "Kintamani",
        "image": ""
    },
    {
        "name": "Kishu",
        "image": ""
    },
    {
        "name": "Kokoni",
        "image": ""
    },
    {
        "name": "Kombai",
        "image": ""
    },
    {
        "name": "Komondor",
        "image": ""
    },
    {
        "name": "Kooikerhondje",
        "image": ""
    },
    {
        "name": "Koolie",
        "image": ""
    },
    {
        "name": "Koyun dog",
        "image": ""
    },
    {
        "name": "Kromfohrländer",
        "image": ""
    },
    {
        "name": "Kuchi",
        "image": ""
    },
    {
        "name": "Kunming dog",
        "image": ""
    },
    {
        "name": "Kurdish Mastiff",
        "image": ""
    },
    {
        "name": "Kuvasz",
        "image": ""
    },
    {
        "name": "Labrador Retriever",
        "image": ""
    },
    {
        "name": "Lagotto Romagnolo",
        "image": ""
    },
    {
        "name": "Lakeland Terrier",
        "image": ""
    },
    {
        "name": "Lancashire Heeler",
        "image": ""
    },
    {
        "name": "Landseer",
        "image": ""
    },
    {
        "name": "Lapponian Herder",
        "image": ""
    },
    {
        "name": "Large Münsterländer",
        "image": ""
    },
    {
        "name": "Leonberger",
        "image": ""
    },
    {
        "name": "Levriero Sardo",
        "image": ""
    },
    {
        "name": "Lhasa Apso",
        "image": ""
    },
    {
        "name": "Liangshan Dog",
        "image": ""
    },
    {
        "name": "Lithuanian Hound",
        "image": ""
    },
    {
        "name": "Lobito Herreño",
        "image": ""
    },
    {
        "name": "Löwchen",
        "image": ""
    },
    {
        "name": "Lupo Italiano",
        "image": ""
    },
    {
        "name": "Mackenzie River husky",
        "image": ""
    },
    {
        "name": "Magyar agár",
        "image": ""
    },
    {
        "name": "Mahratta Greyhound",
        "image": ""
    },
    {
        "name": "Maltese",
        "image": ""
    },
    {
        "name": "Manchester Terrier",
        "image": ""
    },
    {
        "name": "Maneto",
        "image": ""
    },
    {
        "name": "Maremmano-Abruzzese Sheepdog",
        "image": ""
    },
    {
        "name": "McNab dog",
        "image": ""
    },
    {
        "name": "Miniature American Shepherd",
        "image": ""
    },
    {
        "name": "Miniature Bull Terrier",
        "image": ""
    },
    {
        "name": "Miniature Fox Terrier",
        "image": ""
    },
    {
        "name": "Miniature Pinscher",
        "image": ""
    },
    {
        "name": "Miniature Schnauzer",
        "image": ""
    },
    {
        "name": "Molossus of Epirus",
        "image": ""
    },
    {
        "name": "Mongrel",
        "image": ""
    },
    {
        "name": "Montenegrin Mountain Hound",
        "image": ""
    },
    {
        "name": "Mountain Cur",
        "image": ""
    },
    {
        "name": "Mountain Feist",
        "image": ""
    },
    {
        "name": "Mucuchies",
        "image": ""
    },
    {
        "name": "Mudhol Hound",
        "image": ""
    },
    {
        "name": "Mudi",
        "image": ""
    },
    {
        "name": "Neapolitan Mastiff",
        "image": ""
    },
    {
        "name": "Nenets Herding Laika",
        "image": ""
    },
    {
        "name": "New Guinea singing dog",
        "image": ""
    },
    {
        "name": "New Zealand Heading Dog",
        "image": ""
    },
    {
        "name": "Newfoundland",
        "image": ""
    },
    {
        "name": "Norfolk Terrier",
        "image": ""
    },
    {
        "name": "Norrbottenspets",
        "image": ""
    },
    {
        "name": "Northern Inuit Dog",
        "image": ""
    },
    {
        "name": "Norwegian Buhund",
        "image": ""
    },
    {
        "name": "Norwegian Elkhound",
        "image": ""
    },
    {
        "name": "Norwegian Lundehund",
        "image": ""
    },
    {
        "name": "Norwich Terrier",
        "image": ""
    },
    {
        "name": "Nova Scotia Duck Tolling Retriever",
        "image": ""
    },
    {
        "name": "Old Danish Pointer",
        "image": ""
    },
    {
        "name": "Old English Sheepdog",
        "image": ""
    },
    {
        "name": "Old English Terrier",
        "image": ""
    },
    {
        "name": "Olde English Bulldogge",
        "image": ""
    },
    {
        "name": "Otterhound",
        "image": ""
    },
    {
        "name": "Pachon Navarro",
        "image": ""
    },
    {
        "name": "Pampas Deerhound",
        "image": ""
    },
    {
        "name": "Papillon",
        "image": ""
    },
    {
        "name": "Parson Russell Terrier",
        "image": ""
    },
    {
        "name": "Pastore della Lessinia' e del Lagorai",
        "image": ""
    },
    {
        "name": "Patagonian Sheepdog",
        "image": ""
    },
    {
        "name": "Patterdale Terrier",
        "image": ""
    },
    {
        "name": "Pekingese",
        "image": ""
    },
    {
        "name": "Pembroke Welsh Corgi",
        "image": ""
    },
    {
        "name": "Perro Majorero",
        "image": ""
    },
    {
        "name": "Perro de Pastor Mallorquin",
        "image": ""
    },
    {
        "name": "Perro de Presa Canario",
        "image": ""
    },
    {
        "name": "Perro de Presa Mallorquin",
        "image": ""
    },
    {
        "name": "Peruvian Inca Orchid",
        "image": ""
    },
    {
        "name": "Petit Basset Griffon Vendéen",
        "image": ""
    },
    {
        "name": "Petit Bleu de Gascogne",
        "image": ""
    },
    {
        "name": "Phalène",
        "image": ""
    },
    {
        "name": "Pharaoh Hound",
        "image": ""
    },
    {
        "name": "Phu Quoc Ridgeback",
        "image": ""
    },
    {
        "name": "Picardy Spaniel",
        "image": ""
    },
    {
        "name": "Plummer Terrier",
        "image": ""
    },
    {
        "name": "Plott Hound",
        "image": ""
    },
    {
        "name": "Podenco Andaluz",
        "image": ""
    },
    {
        "name": "Podenco Canario",
        "image": ""
    },
    {
        "name": "Podenco Valenciano",
        "image": ""
    },
    {
        "name": "Pointer",
        "image": ""
    },
    {
        "name": "Poitevin",
        "image": ""
    },
    {
        "name": "Polish Greyhound",
        "image": ""
    },
    {
        "name": "Polish Hound",
        "image": ""
    },
    {
        "name": "Polish Lowland Sheepdog",
        "image": ""
    },
    {
        "name": "Polish Tatra Sheepdog",
        "image": ""
    },
    {
        "name": "Pomeranian",
        "image": ""
    },
    {
        "name": "Pont-Audemer Spaniel",
        "image": ""
    },
    {
        "name": "Poodle",
        "image": ""
    },
    {
        "name": "Porcelaine",
        "image": ""
    },
    {
        "name": "Portuguese Podengo",
        "image": ""
    },
    {
        "name": "Portuguese Pointer",
        "image": ""
    },
    {
        "name": "Portuguese Water Dog",
        "image": ""
    },
    {
        "name": "Posavac Hound",
        "image": ""
    },
    {
        "name": "Pražský Krysařík",
        "image": ""
    },
    {
        "name": "Pudelpointer",
        "image": ""
    },
    {
        "name": "Pug",
        "image": ""
    },
    {
        "name": "Puli",
        "image": ""
    },
    {
        "name": "Pumi",
        "image": ""
    },
    {
        "name": "Pungsan dog",
        "image": ""
    },
    {
        "name": "Pyrenean Mastiff",
        "image": ""
    },
    {
        "name": "Pyrenean Mountain Dog",
        "image": ""
    },
    {
        "name": "Pyrenean Sheepdog",
        "image": ""
    },
    {
        "name": "Rafeiro do Alentejo",
        "image": ""
    },
    {
        "name": "Rajapalayam",
        "image": ""
    },
    {
        "name": "Rampur Greyhound",
        "image": ""
    },
    {
        "name": "Rat Terrier",
        "image": ""
    },
    {
        "name": "Ratonero Bodeguero Andaluz",
        "image": ""
    },
    {
        "name": "Ratonero Mallorquin",
        "image": ""
    },
    {
        "name": "Ratonero Murciano",
        "image": ""
    },
    {
        "name": "Ratonero Valenciano",
        "image": ""
    },
    {
        "name": "Redbone Coonhound",
        "image": ""
    },
    {
        "name": "Rhodesian Ridgeback",
        "image": ""
    },
    {
        "name": "Romanian Mioritic Shepherd Dog",
        "image": ""
    },
    {
        "name": "Romanian Raven Shepherd Dog",
        "image": ""
    },
    {
        "name": "Rottweiler",
        "image": ""
    },
    {
        "name": "Rough Collie",
        "image": ""
    },
    {
        "name": "Russian Spaniel",
        "image": ""
    },
    {
        "name": "Russian Toy",
        "image": ""
    },
    {
        "name": "Russo-European Laika",
        "image": ""
    },
    {
        "name": "Ryukyu Inu",
        "image": ""
    },
    {
        "name": "Saarloos Wolfdog",
        "image": ""
    },
    {
        "name": "Sabueso Español",
        "image": ""
    },
    {
        "name": "Saint Bernard",
        "image": ""
    },
    {
        "name": "Saint Hubert Jura Hound",
        "image": ""
    },
    {
        "name": "Saint Miguel Cattle Dog",
        "image": ""
    },
    {
        "name": "Saint-Usuge Spaniel",
        "image": ""
    },
    {
        "name": "Saluki",
        "image": ""
    },
    {
        "name": "Samoyed",
        "image": ""
    },
    {
        "name": "Sapsali",
        "image": ""
    },
    {
        "name": "Sarabi dog",
        "image": ""
    },
    {
        "name": "Sardinian Shepherd Dog",
        "image": ""
    },
    {
        "name": "Šarplaninac",
        "image": ""
    },
    {
        "name": "Schapendoes",
        "image": ""
    },
    {
        "name": "Schillerstövare",
        "image": ""
    },
    {
        "name": "Schipperke",
        "image": ""
    },
    {
        "name": "Schweizer Laufhund",
        "image": ""
    },
    {
        "name": "Schweizerischer Niederlaufhund",
        "image": ""
    },
    {
        "name": "Scottish Deerhound",
        "image": ""
    },
    {
        "name": "Scottish Terrier",
        "image": ""
    },
    {
        "name": "Sealyham Terrier",
        "image": ""
    },
    {
        "name": "Segugio dell'Appennino",
        "image": ""
    },
    {
        "name": "Segugio Italiano",
        "image": ""
    },
    {
        "name": "Segugio Maremmano",
        "image": ""
    },
    {
        "name": "Serbian Hound",
        "image": ""
    },
    {
        "name": "Serbian Tricolour Hound",
        "image": ""
    },
    {
        "name": "Serrano Bulldog",
        "image": ""
    },
    {
        "name": "Shar Pei",
        "image": ""
    },
    {
        "name": "Shetland Sheepdog",
        "image": ""
    },
    {
        "name": "Shiba Inu",
        "image": ""
    },
    {
        "name": "Shih Tzu",
        "image": ""
    },
    {
        "name": "Shikoku",
        "image": ""
    },
    {
        "name": "Shiloh Shepherd",
        "image": ""
    },
    {
        "name": "Siberian Husky",
        "image": ""
    },
    {
        "name": "Silken Windhound",
        "image": ""
    },
    {
        "name": "Silky Terrier",
        "image": ""
    },
    {
        "name": "Sinhala Hound",
        "image": ""
    },
    {
        "name": "Skye Terrier",
        "image": ""
    },
    {
        "name": "Sloughi",
        "image": ""
    },
    {
        "name": "Slovakian Wirehaired Pointer",
        "image": ""
    },
    {
        "name": "Slovenský Cuvac",
        "image": ""
    },
    {
        "name": "Slovenský Kopov",
        "image": ""
    },
    {
        "name": "Smalandstövare",
        "image": ""
    },
    {
        "name": "Small Greek domestic dog",
        "image": ""
    },
    {
        "name": "Small Münsterländer",
        "image": ""
    },
    {
        "name": "Smithfield",
        "image": ""
    },
    {
        "name": "Smooth Collie",
        "image": ""
    },
    {
        "name": "Smooth Fox Terrier",
        "image": ""
    },
    {
        "name": "Soft-Coated Wheaten Terrier",
        "image": ""
    },
    {
        "name": "South Russian Ovcharka",
        "image": ""
    },
    {
        "name": "Spanish Mastiff",
        "image": ""
    },
    {
        "name": "Spanish Water Dog",
        "image": ""
    },
    {
        "name": "Spino degli Iblei",
        "image": ""
    },
    {
        "name": "Spinone Italiano",
        "image": ""
    },
    {
        "name": "Sporting Lucas Terrier",
        "image": ""
    },
    {
        "name": "Stabyhoun",
        "image": ""
    },
    {
        "name": "Staffordshire Bull Terrier",
        "image": ""
    },
    {
        "name": "Standard Schnauzer",
        "image": ""
    },
    {
        "name": "Stephens Stock",
        "image": ""
    },
    {
        "name": "Styrian Coarse-haired Hound",
        "image": ""
    },
    {
        "name": "Sussex Spaniel",
        "image": ""
    },
    {
        "name": "Swedish Lapphund",
        "image": ""
    },
    {
        "name": "Swedish Vallhund",
        "image": ""
    },
    {
        "name": "Swinford Bandog",
        "image": ""
    },
    {
        "name": "Taigan",
        "image": ""
    },
    {
        "name": "Taiwan Dog",
        "image": ""
    },
    {
        "name": "Tamaskan Dog",
        "image": ""
    },
    {
        "name": "Tang Dog",
        "image": ""
    },
    {
        "name": "Tarsus çatalburun",
        "image": ""
    },
    {
        "name": "Tazy",
        "image": ""
    },
    {
        "name": "Teddy Roosevelt Terrier",
        "image": ""
    },
    {
        "name": "Telomian",
        "image": ""
    },
    {
        "name": "Tenterfield Terrier",
        "image": ""
    },
    {
        "name": "Terrier Brasileiro",
        "image": ""
    },
    {
        "name": "Thai Bangkaew Dog",
        "image": ""
    },
    {
        "name": "Thai Ridgeback",
        "image": ""
    },
    {
        "name": "Tibetan Kyi Apso",
        "image": ""
    },
    {
        "name": "Tibetan Mastiff",
        "image": ""
    },
    {
        "name": "Tibetan Spaniel",
        "image": ""
    },
    {
        "name": "Tibetan Terrier",
        "image": ""
    },
    {
        "name": "Tonya Finosu",
        "image": ""
    },
    {
        "name": "Torkuz",
        "image": ""
    },
    {
        "name": "Tornjak",
        "image": ""
    },
    {
        "name": "Tosa Inu",
        "image": ""
    },
    {
        "name": "Toy Fox Terrier",
        "image": ""
    },
    {
        "name": "Toy Manchester Terrier",
        "image": ""
    },
    {
        "name": "Transylvanian Hound",
        "image": ""
    },
    {
        "name": "Treeing Cur",
        "image": ""
    },
    {
        "name": "Treeing Feist",
        "image": ""
    },
    {
        "name": "Treeing Tennessee Brindle",
        "image": ""
    },
    {
        "name": "Treeing Walker Coonhound",
        "image": ""
    },
    {
        "name": "Trigg Hound",
        "image": ""
    },
    {
        "name": "Tyrolean Hound",
        "image": ""
    },
    {
        "name": "Vikhan",
        "image": ""
    },
    {
        "name": "Villano de Las Encartaciones",
        "image": ""
    },
    {
        "name": "Villanuco de Las Encartaciones",
        "image": ""
    },
    {
        "name": "Vizsla",
        "image": ""
    },
    {
        "name": "Volkosob",
        "image": ""
    },
    {
        "name": "Volpino Italiano",
        "image": ""
    },
    {
        "name": "Weimaraner",
        "image": ""
    },
    {
        "name": "Welsh Hound",
        "image": ""
    },
    {
        "name": "Welsh Sheepdog",
        "image": ""
    },
    {
        "name": "Welsh Springer Spaniel",
        "image": ""
    },
    {
        "name": "Welsh Terrier",
        "image": ""
    },
    {
        "name": "West Country Harrier",
        "image": ""
    },
    {
        "name": "West Highland White Terrier",
        "image": ""
    },
    {
        "name": "West Siberian Laika",
        "image": ""
    },
    {
        "name": "Westphalian Dachsbracke",
        "image": ""
    },
    {
        "name": "Wetterhoun",
        "image": ""
    },
    {
        "name": "Whippet",
        "image": ""
    },
    {
        "name": "White Shepherd",
        "image": ""
    },
    {
        "name": "White Swiss Shepherd Dog",
        "image": ""
    },
    {
        "name": "Wire Fox Terrier",
        "image": ""
    },
    {
        "name": "Wirehaired Pointing Griffon",
        "image": ""
    },
    {
        "name": "Wirehaired Vizsla",
        "image": ""
    },
    {
        "name": "Xiasi Dog",
        "image": ""
    },
    {
        "name": "Xoloitzcuintle",
        "image": ""
    },
    {
        "name": "Yakutian Laika",
        "image": ""
    },
    {
        "name": "Yorkshire Terrier",
        "image": ""
    },
    {
        "name": "Zerdava",
        "image": ""
    },
    {
        "name": "Other",
        "image": ""
    }
]

  return (
    <div className="broadest-container">
      <Breeds dogBreeds={dogBreeds}/>
      {/* <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
