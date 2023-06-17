import Breeds from "./components/Breeds";
import { useEffect, useInsertionEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dogBreeds = [
    {
      name: "Other",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Question_Mark_1.svg/2026px-Question_Mark_1.svg.png"
  },
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
        name: "Aidi",
        image: "https://www.worldlifeexpectancy.com//images/a/d/d/b/aidi/aidi_1.min.jpg"
    },
    {
        name: "Airedale Terrier",
        image: "https://a-z-animals.com/media/2019/10/shutterstock_1031650777-e1658352294248.jpg"
    },
    {
        name: "Akbash",
        image: "https://breed-assets.wisdompanel.com/dog/akbash/Akbash1.jpg"
    },
    {
        name: "Akita",
        image: "https://t3.ftcdn.net/jpg/02/84/14/44/360_F_284144477_s3FAYbNDEVQpqhNE9zTfVXquYHwKCFQv.jpg"
    },
    {
        name: "Aksaray Malaklisi",
        image: "https://www.shutterstock.com/image-photo/kangal-shepherd-dog-front-white-260nw-2123077307.jpg"
    },
    {
        name: "Alano Español",
        image: "https://biodog.es/wp-content/uploads/2018/12/Alano-espanol_razas-de-perro.jpg"
    },
    {
        name: "Alapaha Blue Blood Bulldog",
        image: "https://ckcusa.com/media/147400/alapaha-blue-blood-bulldog.jpg?preset=ckcBreedImage375"
    },
    {
        name: "Alaskan Husky",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Siberian-husky.jpg"
    },
    {
        name: "Alaskan Klee Kai",
        image: "https://www.thesprucepets.com/thmb/GLetQ7F27j92vM_YAWKqT9Bbqx8=/2800x0/filters:no_upscale():strip_icc()/GettyImages-466104988-85c4d45e5954464d867aee66d0285dc3.jpg"
    },
    {
        name: "Alaskan Malamute",
        image: "https://static.vecteezy.com/system/resources/previews/000/837/911/large_2x/alaskan-malamute-photo.jpg"
    },
    {
        name: "Alopekis",
        image: "https://www.mydog.pet/wp-content/uploads/2021/06/Alopekis-Price.jpg"
    },
    {
        name: "Alpine Dachsbracke",
        image: "https://as1.ftcdn.net/v2/jpg/02/18/98/84/1000_F_218988445_TGAurU1673HaWTwQ1ynE0IEPilFCMmGg.jpg"
    },
    {
        name: "American Bulldog",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/83/American_Bulldog..jpg"
    },
    {
        name: "American Bully",
        image: "https://static.wixstatic.com/media/4cbc05_91616bae87d4463aa38fede17530f69a~mv2.jpg/v1/crop/x_1,y_0,w_587,h_587/fill/w_468,h_468,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ukbkc-standard-bully_edited.jpg"
    },
    {
        name: "American Cocker Spaniel",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/American_Cocker_Spaniel_portrait..jpg"
    },
    {
        name: "American English Coonhound",
        image: "https://dogtime.com/wp-content/uploads/sites/12/gallery/american-english-coonhound-breed/american-coonhound-4.jpg"
    },
    {
        name: "American Eskimo Dog",
        image: "https://www.thesprucepets.com/thmb/rs7lG8vh-NOthJdu1v2M5SilSTo=/2819x0/filters:no_upscale():strip_icc()/American_Eskimo_Dog_1-2ae6659955ec4885b25bfb25220e7f60.jpg"
    },
    {
        name: "American Foxhound",
        image: "https://www.hundeo.com/wp-content/uploads/2019/01/American-Foxhound-Profilbild.jpg"
    },
    {
        name: "American Hairless Terrier",
        image: "https://static.wikia.nocookie.net/akc-dog-breeds/images/6/61/American-Hairless-Terrier.jpg/revision/latest?cb=20180125220159"
    },
    {
        name: "American Leopard Hound",
        image: "https://www.hepper.com/wp-content/uploads/2021/11/American-Leopard-Hound-adult-dog.jpg"
    },
    {
        name: "American Pit Bull Terrier",
        image: "https://www.hundeo.com/wp-content/uploads/2019/11/American-Pitbull-liegt.jpg"
    },
    {
        name: "American Staffordshire Terrier",
        image: "https://breed-assets.wisdompanel.com/dog/american-staffordshire-terrier/American_Staffordshire_Terrier1.jpg"
    },
    {
        name: "American Water Spaniel",
        image: "https://www.101dogbreeds.com/wp-content/uploads/2016/09/American-Water-Spaniel.jpg"
    },
    {
        name: "Anglo-Français de Petite Vénerie",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Anglo-fran%C3%A7ais_de_petite_v%C3%A9nerie%2C_Derrida-101.jpg"
    },
    {
        name: "Appenzeller Sennenhund",
        image: "https://ckcusa.com/media/147428/appenzeller-sennenhund.jpg?preset=ckcBreedImage375"
    },
    {
        name: "Ariège Pointer",
        image: "https://doglime.com/wp-content/uploads/2019/10/Ariege-Pointer-Information.jpg.webp"
    },
    {
        name: "Ariegeois",
        image: "https://st3.depositphotos.com/8776626/35077/i/450/depositphotos_350770932-stock-photo-ariegeois-hound-dog-standing-grass.jpg"
    },
    {
        name: "Armant",
        image: "https://nationalpurebreddogday.com/wp-content/uploads/2017/12/ef105db20a73e585ec58ea203d9d07e3.jpg"
    },
    {
        name: "Armenian Gampr",
        image: "https://www.peopleofar.com/wp-content/uploads/Armenian-gampr-dog.jpg"
    },
    {
        name: "Artois Hound",
        image: "https://i.pinimg.com/originals/fc/46/91/fc46917a936fa1d6a2a8452a08e837f3.jpg"
    },
    {
        name: "Assyrian Mastiff",
        image: "https://pbs.twimg.com/media/EGV3um8X0AAFAYP.jpg"
    },
    {
        name: "Australian Cattle Dog",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5thIgrBRmVNRGDC_crzCVDZ8gv9tYFs1QRP4NaQd0Yw&usqp=CAU&ec=48665701"
    },
    {
        name: "Australian Kelpie",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Australien_Kelpie.jpg"
    },
    {
        name: "Australian Shepherd",
        image: "https://simg.nicepng.com/png/small/281-2813082_few-breeds-are-more-at-home-on-the.png"
    },
    {
        name: "Australian Stumpy Tail Cattle Dog",
        image: "https://www.akc.org/wp-content/uploads/2018/07/Australian-Stumpy-Tail-Cattle-Dog-Slideshow-04.jpg"
    },
    {
        name: "Australian Terrier",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Australian-Terrier-standing-in-the-garden.jpg"
    },
    {
        name: "Austrian Black and Tan Hound",
        image: "https://i.pinimg.com/originals/85/17/dc/8517dcd300ac1601ff4a6127d47f866b.jpg"
    },
    {
        name: "Austrian Pinscher",
        image: "https://d83vwgwvylun0.cloudfront.net/img/s/289-austrian-pinscher.jpg"
    },
    {
        name: "Azawakh",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Azawakh_178091272.jpg"
    },
    {
        name: "Bắc Hà dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/B%E1%BA%AFc_H%C3%A0_dog_side.jpg/800px-B%E1%BA%AFc_H%C3%A0_dog_side.jpg"
    },
    {
        name: "Bakharwal dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bakharwal.jpg/220px-Bakharwal.jpg"
    },
    {
        name: "Banjara Hound",
        image: "https://i.pinimg.com/736x/ff/0c/a5/ff0ca517befdfc893039ea662ac7c55b.jpg"
    },
    {
        name: "Bankhar Dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Hotosho-2.jpg/220px-Hotosho-2.jpg"
    },
    {
        name: "Barak hound",
        image: "https://fello.pet/wp-content/uploads/2020/12/bosnijskaya-1.jpg"
    },
    {
        name: "Barbado da Terceira",
        image: "https://i.pinimg.com/736x/ca/5c/fa/ca5cfa59de7e31205a62a8347ef8d04f--barbados.jpg"
    },
    {
        name: "Barbet",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Barbet_suka_2009_pl4.jpg/220px-Barbet_suka_2009_pl4.jpg"
    },
    {
        name: "Basenji",
        image: "https://www.hundeo.com/wp-content/uploads/2019/01/Basenji-7.jpg"
    },
    {
        name: "Basque Shepherd Dog",
        image: "https://a.storyblok.com/f/92981/800x570/525f7bf91a/basque-shepherd-dog-primary.jpg"
    },
    {
        name: "Basset Artésien Normand",
        image: "https://ckcusa.com/media/147446/basset-artesian-normand.jpg?preset=ckcBreedImage375"
    },
    {
        name: "Basset Bleu de Gascogne",
        image: "https://www.purina-arabia.com/sites/default/files/breed_library/basset_bleu_de_gascogne.jpg"
    },
    {
        name: "Basset Fauve de Bretagne",
        image: "https://www.purina.co.uk/sites/default/files/breed_library/basset_fauve_de_bretagne.jpg"
    },
    {
        name: "Basset Hound",
        image: "https://www.petbarn.com.au/petspot/app/uploads/2014/12/43.-Basset-Hound.jpg"
    },
    {
        name: "Bavarian Mountain Hound",
        image: "https://www.purina.co.uk/sites/default/files/breed_library/bavarian_mountain_hound.jpg"
    },
    {
        name: "Beagle",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23012_beagle.jpg"
    },
    {
        name: "Beagle-Harrier",
        image: "https://i-10b32.kxcdn.com/ppbr/breeds/beagle-harrier_profile_350x400.jpg"
    },
    {
        name: "Bearded Collie",
        image: "https://www.purina.co.uk/sites/default/files/2022-07/Bearded-Collie.jpg?itok=lHnJHD40"
    },
    {
        name: "Beauceron",
        image: "https://www.purina.co.uk/sites/default/files/2022-07/Beauceron.jpg?itok=zTc5ZQtM"
    },
    {
        name: "Bedlington Terrier",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23056_bedlington-terrier.jpg"
    },
    {
        name: "Belgian Shepherd",
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Belgian-Shepherd-Dog-Malinois.jpg?itok=sG3hHbOd"
    },
    {
        name: "Bergamasco Shepherd",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Ortensia_di_Valle_Scrivia.jpg"
    },
    {
        name: "Berger Picard",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23290_berger-picard.jpg"
    },
    {
        name: "Bernese Mountain Dog",
        image: "https://media.istockphoto.com/id/1346381655/photo/tricolor-bernese-mountain-dog-sitting-looking-at-camera-and-panting-isolated-on-white.jpg?s=612x612&w=0&k=20&c=WyEzimxAgxEzTut4bDbi5gvqO8WiKMzSI7aZ2tv72Hs="
    },
    {
        name: "Bichon Frisé",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bichon_Fris%C3%A9_-_studdogbichon.jpg"
    },
    {
        name: "Billy",
        image: "https://as2.ftcdn.net/v2/jpg/02/85/17/71/1000_F_285177145_bwRuc7sMW0UtMpdi9S6UEYqm9wy8gsn7.jpg"
    },
    {
        name: "Black and Tan Coonhound",
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Black-and-Tan-Coonhound.jpg?itok=bWcYPJ88"
    },
    {
        name: "Black Norwegian Elkhound",
        image: "https://i.pinimg.com/originals/73/2c/eb/732cebeeaa6ce98302b5615b5f42f8a3.jpg"
    },
    {
        name: "Black Russian Terrier",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Black-Russian-Terrier-Illo-3.jpg"
    },
    {
        name: "Black Mouth Cur",
        image: "https://petkeen.com/wp-content/uploads/2021/06/closeup-of-a-Black-Mouth-Cur-in-a-park_Wirestock-Creators_Shutterstock.jpg"
    },
    {
        name: "Bloodhound",
        image: "https://www.shutterstock.com/image-photo/portrait-thoroughbred-bloodhound-dog-on-260nw-664033078.jpg"
    },
    {
        name: "Blue Lacy",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Blue_lacy_working.jpg"
    },
    {
        name: "Blue Picardy Spaniel",
        image: "https://cdn-images.vetstreet.com/58/c1/658046ee4423ab5f9e5ef667d51f/blue-picardy-spaniel-ap-fv9k9t-645-x-380.jpg"
    },
    {
        name: "Bluetick Coonhound",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/BluetickCoonhound.jpg"
    },
    {
        name: "Boerboel",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Boerboel-On-White-01.jpg"
    },
    {
        name: "Bohemian Shepherd",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2020/04/Bohemian-Shepherd-dog-breed-pictures-cover.jpg"
    },
    {
        name: "Bolognese",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23240_bolognese.jpg"
    },
    {
        name: "Border Collie",
        image: "https://media.istockphoto.com/id/536505777/photo/border-collie.jpg?s=612x612&w=0&k=20&c=h3-9PBUC13KfotCaOTVKlwd2mpg4A1Uuhzen-9ZiR9o="
    },
    {
        name: "Border Terrier",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Border-Terrier-On-White-03.jpg"
    },
    {
        name: "Borzoi",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_23018_borzoi.jpg?w=460"
    },
    {
        name: "Boston Terrier",
        image: "https://canna-pet.com/wp-content/uploads/2016/01/boston-terrier.jpg"
    },
    {
        name: "Bouvier des Ardennes",
        image: "https://nationalpurebreddogday.com/wp-content/uploads/2019/08/b9f80b8bd9f26a46ff3a273faa203c8e.jpg"
    },
    {
        name: "Bouvier des Flandres",
        image: "https://static9.depositphotos.com/1594920/1087/i/950/depositphotos_10873338-stock-photo-bouvier-des-flandres-2-years.jpg"
    },
    {
        name: "Boxer",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Boxer_Fond_Blanc.jpg"
    },
    {
        name: "Boykin Spaniel",
        image: "https://www.animalsaroundtheglobe.com/wp-content/uploads/2023/02/nick-russill-ddDdRo8OhtQ-unsplash-1200x800.jpg.webp"
    },
    {
        name: "Bracco Italiano",
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Bracco%20Italiano1.jpg?h=c17eaee4&itok=7A1GMZuj"
    },
    {
        name: "Braque d'Auvergne",
        image: "https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Braque-D-Auvergne.jpg?itok=gv8Wkyda"
    },
    {
        name: "Braque du Bourbonnais",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Braque_Du_Bourbonnais.jpg"
    },
    {
        name: "Braque Français",
        image: "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/braque-fran%C3%A7ais.jpg"
    },
    {
        name: "Braque Saint-Germain",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Braque_Saint-Germain.jpg"
    },
    {
        name: "Briard",
        image: "https://thumbs.dreamstime.com/b/side-view-briard-dog-sitting-12909672.jpg"
    },
    {
        name: "Briquet Griffon Vendéen",
        image: "https://www.easypetmd.com/sites/default/files/imagecache/Portrait/Briquet%20Griffon%20Vendeen_0.jpg"
    },
    {
        name: "Brittany",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2011/01/file_22956_brittany.jpg"
    },
    {
        name: "Broholmer",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2019/09/Broholmer-dog-breed-pictures-cover.jpg?w=760"
    },
    {
        name: "Bruno Jura Hound",
        image: "https://nationalpurebreddogday.com/wp-content/uploads/2017/07/bruno-saint-hubert-francais-131015-131202.jpg"
    },
    {
        name: "Brussels Griffon",
        image: "https://hellobark.com/wp-content/uploads/brussels-griffon-1200-1.jpg"
    },
    {
        name: "Bucovina Shepherd Dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Bucovina_Sheepdog.jpg"
    },
    {
        name: "Bull Arab",
        image: "https://lirp.cdn-website.com/856893f0/dms3rep/multi/opt/1594_DOGS+-+BULL+ARAB-640w.jpg"
    },
    {
        name: "Bull Terrier",
        image: "https://static9.depositphotos.com/1594920/1086/i/950/depositphotos_10864018-stock-photo-bull-terrier.jpg"
    },
    {
        name: "Bulldog",
        image: "https://media.istockphoto.com/id/855841098/photo/english-bulldog.jpg?s=612x612&w=0&k=20&c=MH8THQVlDgsnFVgmlAD2PtsYC08FSiKKmuSIa2UkmFs="
    },
    {
        name: "Bullmastiff",
        image: "https://www.purina.co.uk/sites/default/files/2022-07/Bullmastiff.jpg?itok=T_-crxca"
    },
    {
        name: "Bully Kutta",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bully_Kutta_Male.jpg/640px-Bully_Kutta_Male.jpg"
    },
    {
        name: "Burgos Pointer",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Burgos_Pointer_or_Perdiguero_de_Burgos.JPG"
    },
    {
        name: "Ca Mè Mallorquí",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ca_m%C3%A8_mallorqu%C3%AD_03a.jpg"
    },
    {
        name: "Ca de Bou",
        image: "https://cdn.dogsplanet.com/wp-content/uploads/2019/10/dogue-de-majorque.jpg"
    },
    {
        name: "Cairn Terrier",
        image: "https://www.purina.co.uk/sites/default/files/2022-07/Cairn-Terrier.jpg?itok=fydT0sUW"
    },
    {
        name: "Calupoh",
        image: "https://www.dogmal.com/wp-content/uploads/2018/10/calupoh-dog-photo.jpg"
    },
    {
        name: "Campeiro Bulldog",
        image: "https://thebulldogaddict.com/wp-content/uploads/2020/11/Campeiro-Bulldog-Picture.jpg"
    },
    {
        name: "Can de Chira",
        image: "https://i.pinimg.com/736x/e0/6d/f6/e06df671054abc2614f54a3aa8a1651c.jpg"
    },
    {
        name: "Can de Palleiro",
        image: "https://live.staticflickr.com/3858/14518132605_df9e534cbe_b.jpg"
    },
    {
        name: "Canaan Dog",
        image: "https://cdn.britannica.com/74/123274-004-F01BE1A3/Canaan-dog.jpg"
    },
    {
        name: "Canadian Eskimo Dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Spoonsced.jpg"
    },
    {
        name: "Cane Corso",
        image: "https://img.pixers.pics/pho_wat(s3:700/FO/73/21/04/2/700_FO7321042_71009b227c912f6e5099d3e0343581a0.jpg,700,698,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,482,650,jpg)/posters-cane-corso-2-years.jpg.jpg"
    },
    {
        name: "Cane di Oropa",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Pastore_biellese_%28kahlua%29_%28cropped%29.JPG/640px-Pastore_biellese_%28kahlua%29_%28cropped%29.JPG"
    },
    {
        name: "Cane Paratore",
        image: "https://i.pinimg.com/736x/ae/48/63/ae48639d11820205e6b48fd6d0760509.jpg"
    },
    {
        name: "Cantabrian Water Dog",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Perro_de_Agua_del_Cant%C3%A1brico_Macho_Exposici%C3%B3n.jpg"
    },
    {
        name: "Cão da Serra de Aires",
        image: "https://web5.lifelearn.com/glenlakeah/wp-content/uploads/2014/10/CaoDeSerraDeAires1of2.jpg"
    },
    {
        name: "Cão de Castro Laboreiro",
        image: "https://www.cpc.pt/wp-content/uploads/2021/01/castro_laboreiro_01.jpg"
    },
    {
        name: "Cão de Gado Transmontano",
        image: "https://ter-ra.pt/imagens/galeria/cao_de_gado_transmontano_61657310bd62b_60_3.jpg"
    },
    {
        name: "Cão Fila de São Miguel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_1pl.jpg/1200px-Rzesz%C3%B3w_C%C3%A3o_Fila_de_S%C3%A3o_Miguel_1pl.jpg"
    },
    {
        name: "Cardigan Welsh Corgi",
        image: "https://www.akc.org/wp-content/uploads/2017/11/Cardigan-Welsh-Corgi-on-White-111.jpg"
    },
    {
        name: "Carea Castellano Manchego",
        image: "https://i.pinimg.com/736x/19/46/90/19469041bdc0b146424cce4420df5e4a--cadillac-spain.jpg"
    },
    {
        name: "Carea Leonés",
        image: "https://64.media.tumblr.com/2e2e9050b37546bb7f16969619d58f76/tumblr_oskfccwP1W1voe2ymo1_640.jpg"
    },
    {
        name: "Carolina Dog",
        image: "https://dogtime.com/wp-content/uploads/sites/12/gallery/carolina-dog-breed-pictures/carolina-dog-breed-pictures-5.jpg"
    },
    {
        name: "Carpathian Shepherd Dog",
        image: "https://i.pinimg.com/222x/f9/1a/2d/f91a2df6a86b9876be85d6095ed2f8a4.jpg"
    },
    {
        name: "Catahoula Leopard Dog",
        image: "https://media.istockphoto.com/id/1175747011/photo/louisiana-catahoula-leopard-dog.jpg?s=612x612&w=0&k=20&c=wwMUVc9Iro-1TpM2hvDYj_j2FTQBXTR3nQRdEjiXtJ8="
    },
    {
        name: "Catalan Sheepdog",
        image: "https://www.omlet.us/images/cache/397/512/Dog-Catalan_Sheepdog-A_young_Catalan_Sheepdog_with_an_incredible_soft_thick_coat.jpg"
    },
    {
        name: "Caucasian Shepherd Dog",
        image: "https://a.storyblok.com/f/92981/1200x900/180ab49eef/caucasian-shepherd-dog-primary.jpg"
    },
    {
        name: "Cavalier King Charles Spaniel",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Cavalier_King_Charles_Spaniel_02.jpg"
    },
    {
        name: "Central Asian Shepherd Dog",
        image: "https://media.istockphoto.com/id/1308116891/photo/large-dog-alabai-lies-on-the-sawdust-on-the-street-in-winter-white-and-brown-central-asian.jpg?s=612x612&w=0&k=20&c=eYfgGzLw0GmN2VzZQBREpek7T_NTLjMP1MZnZQduZlk="
    },
    {
        name: "Cesky Fousek",
        image: "https://www.worldlifeexpectancy.com//images/a/d/d/b/cesky_fousek/cesky_fousek_1.min.jpg"
    },
    {
        name: "Cesky Terrier",
        image: "https://www.purina.co.uk/sites/default/files/2022-07/Cesky-Terrier.jpg?itok=owDoG1lf"
    },
    {
        name: "Chesapeake Bay Retriever",
        image: "https://www.thesprucepets.com/thmb/tuLRNw4FhF1Mp36EuVNfMM6rYAg=/2689x0/filters:no_upscale():strip_icc()/GettyImages-531551412-fa1000021b9d44f298a08b5cc676c495.jpg"
    },
    {
        name: "Chien Français Blanc et Noir",
        image: "https://www.easypetmd.com/sites/default/files/Chien%20Francais%20Blanc%20et%20Noir_0.jpg"
    },
    {
        name: "Chien Français Blanc et Orange",
        image: "https://i.pinimg.com/originals/91/b4/73/91b4737cd3a66b84029d2b21747264ba.jpg"
    },
    {
        name: "Chien Français Tricolore",
        image: ""
    },
    {
        name: "Chihuahua",
        image: ""
    },
    {
        name: "Chilean Terrier",
        image: ""
    },
    {
        name: "Chinese Crested Dog",
        image: ""
    },
    {
        name: "Chinook",
        image: ""
    },
    {
        name: "Chippiparai",
        image: ""
    },
    {
        name: "Chongqing dog",
        image: ""
    },
    {
        name: "Chortai",
        image: ""
    },
    {
        name: "Chow Chow",
        image: ""
    },
    {
        name: "Chukotka sled dog",
        image: ""
    },
    {
        name: "Cimarrón Uruguayo",
        image: ""
    },
    {
        name: "Cirneco dell'Etna",
        image: ""
    },
    {
        name: "Classic Dingo",
        image: ""
    },
    {
        name: "Clumber Spaniel",
        image: ""
    },
    {
        name: "Colombian fino hound",
        image: ""
    },
    {
        name: "Continental bulldog",
        image: ""
    },
    {
        name: "Coton de Tuléar",
        image: ""
    },
    {
        name: "Cretan Hound",
        image: ""
    },
    {
        name: "Croatian Sheepdog",
        image: ""
    },
    {
        name: "Curly-Coated Retriever",
        image: ""
    },
    {
        name: "Cursinu",
        image: ""
    },
    {
        name: "Czechoslovakian Wolfdog",
        image: ""
    },
    {
        name: "Dachshund",
        image: ""
    },
    {
        name: "Dalmatian",
        image: ""
    },
    {
        name: "Dandie Dinmont Terrier",
        image: ""
    },
    {
        name: "Danish Spitz",
        image: ""
    },
    {
        name: "Danish-Swedish Farmdog",
        image: ""
    },
    {
        name: "Denmark Feist",
        image: ""
    },
    {
        name: "Dingo",
        image: ""
    },
    {
        name: "Dobermann",
        image: ""
    },
    {
        name: "Dogo Argentino",
        image: ""
    },
    {
        name: "Dogo Guatemalteco",
        image: ""
    },
    {
        name: "Dogo Sardesco",
        image: ""
    },
    {
        name: "Dogue Brasileiro",
        image: ""
    },
    {
        name: "Dogue de Bordeaux",
        image: ""
    },
    {
        name: "Donggyeongi",
        image: ""
    },
    {
        name: "Drentse Patrijshond",
        image: ""
    },
    {
        name: "Drever",
        image: ""
    },
    {
        name: "Dunker",
        image: ""
    },
    {
        name: "Dutch Shepherd",
        image: ""
    },
    {
        name: "Dutch Smoushond",
        image: ""
    },
    {
        name: "East Siberian Laika",
        image: ""
    },
    {
        name: "East European Shepherd",
        image: ""
    },
    {
        name: "Ecuadorian Hairless Dog",
        image: ""
    },
    {
        name: "English Cocker Spaniel",
        image: ""
    },
    {
        name: "English Foxhound",
        image: ""
    },
    {
        name: "English Mastiff",
        image: ""
    },
    {
        name: "English Setter",
        image: ""
    },
    {
        name: "English Shepherd",
        image: ""
    },
    {
        name: "English Springer Spaniel",
        image: ""
    },
    {
        name: "English Toy Terrier (Black & Tan)",
        image: ""
    },
    {
        name: "Entlebucher Mountain Dog",
        image: ""
    },
    {
        name: "Estonian Hound",
        image: ""
    },
    {
        name: "Estrela Mountain Dog",
        image: ""
    },
    {
        name: "Eurasier",
        image: ""
    },
    {
        name: "Field Spaniel",
        image: ""
    },
    {
        name: "Fila Brasileiro",
        image: ""
    },
    {
        name: "Finnish Hound",
        image: ""
    },
    {
        name: "Finnish Lapphund",
        image: ""
    },
    {
        name: "Finnish Spitz",
        image: ""
    },
    {
        name: "Flat-Coated Retriever",
        image: ""
    },
    {
        name: "French Bulldog",
        image: ""
    },
    {
        name: "French Spaniel",
        image: ""
    },
    {
        name: "Galgo Español",
        image: ""
    },
    {
        name: "Garafian Shepherd",
        image: ""
    },
    {
        name: "Gascon Saintongeoi",
        image: ""
    },
    {
        name: "Georgian Shepherd",
        image: ""
    },
    {
        name: "German Hound",
        image: ""
    },
    {
        name: "German Longhaired Pointer",
        image: ""
    },
    {
        name: "German Pinsch",
        image: ""
    },
    {
        name: "German Roughhaired Pointer",
        image: ""
    },
    {
        name: "German Shepherd",
        image: ""
    },
    {
        name: "German Shorthaired Pointer",
        image: ""
    },
    {
        name: "German Spaniel",
        image: ""
    },
    {
        name: "German Spitz",
        image: ""
    },
    {
        name: "German Wirehaired Pointer",
        image: ""
    },
    {
        name: "Giant Schnauzer",
        image: ""
    },
    {
        name: "Glen of Imaal Terrier",
        image: ""
    },
    {
        name: "Golden Retriever",
        image: ""
    },
    {
        name: "Gończy Polski",
        image: ""
    },
    {
        name: "Gordon Setter",
        image: ""
    },
    {
        name: "Grand Anglo-Français Blanc et Noir",
        image: ""
    },
    {
        name: "Grand Anglo-Français Blanc et Orange",
        image: ""
    },
    {
        name: "Grand Anglo-Français Tricolore",
        image: ""
    },
    {
        name: "Grand Basset Griffon Vendéen",
        image: ""
    },
    {
        name: "Grand Bleu de Gascogne",
        image: ""
    },
    {
        name: "Grand Griffon Vendéen",
        image: ""
    },
    {
        name: "Great Dane",
        image: ""
    },
    {
        name: "Greater Swiss Mountain Dog",
        image: ""
    },
    {
        name: "Greek Harehound",
        image: ""
    },
    {
        name: "Greek Shepherd",
        image: ""
    },
    {
        name: "Greenland Dog",
        image: ""
    },
    {
        name: "Greyhound",
        image: ""
    },
    {
        name: "Griffon Bleu de Gascogne",
        image: ""
    },
    {
        name: "Griffon Fauve de Bretagne",
        image: ""
    },
    {
        name: "Griffon Nivernais",
        image: ""
    },
    {
        name: "Gull Dong",
        image: ""
    },
    {
        name: "Gull Terrier",
        image: ""
    },
    {
        name: "Hällefors Elkhound",
        image: ""
    },
    {
        name: "Halden Hound",
        image: ""
    },
    {
        name: "Hamiltonstövare",
        image: ""
    },
    {
        name: "Hanover Hound",
        image: ""
    },
    {
        name: "Harrier",
        image: ""
    },
    {
        name: "Havanese",
        image: ""
    },
    {
        name: "Himalayan Sheepdog",
        image: ""
    },
    {
        name: "Hierran Wolfdog",
        image: ""
    },
    {
        name: "Hmong bobtail dog",
        image: ""
    },
    {
        name: "Hokkaido",
        image: ""
    },
    {
        name: "Hovawart",
        image: ""
    },
    {
        name: "Huntaway",
        image: ""
    },
    {
        name: "Hygen Hound",
        image: ""
    },
    {
        name: "Ibizan Hound",
        image: ""
    },
    {
        name: "Icelandic Sheepdog",
        image: ""
    },
    {
        name: "Indian pariah dog",
        image: ""
    },
    {
        name: "Indian Spitz",
        image: ""
    },
    {
        name: "Irish Red and White Setter",
        image: ""
    },
    {
        name: "Irish Setter",
        image: ""
    },
    {
        name: "Irish Terrier",
        image: ""
    },
    {
        name: "Irish Water Spaniel",
        image: ""
    },
    {
        name: "Irish Wolfhound",
        image: ""
    },
    {
        name: "Istrian Coarse-haired Hound",
        image: ""
    },
    {
        name: "Istrian Shorthaired Hound",
        image: ""
    },
    {
        name: "Greyhound",
        image: ""
    },
    {
        name: "Jack Russell Terrier",
        image: ""
    },
    {
        name: "Jagdterrier",
        image: ""
    },
    {
        name: "Jämthund",
        image: ""
    },
    {
        name: "Japanese Chin",
        image: ""
    },
    {
        name: "Japanese Spitz",
        image: ""
    },
    {
        name: "Japanese Terrier",
        image: ""
    },
    {
        name: "Jindo",
        image: ""
    },
    {
        name: "Jonangi",
        image: ""
    },
    {
        name: "Kai Ken",
        image: ""
    },
    {
        name: "Kaikadi",
        image: ""
    },
    {
        name: "Kangal Shepherd Dog",
        image: ""
    },
    {
        name: "Kanni",
        image: ""
    },
    {
        name: "Karakachan dog",
        image: ""
    },
    {
        name: "Karelian Bear Dog",
        image: ""
    },
    {
        name: "Kars",
        image: ""
    },
    {
        name: "Karst Shepherd",
        image: ""
    },
    {
        name: "Keeshond",
        image: ""
    },
    {
        name: "Kerry Beagle",
        image: ""
    },
    {
        name: "Kerry Blue Terrier",
        image: ""
    },
    {
        name: "Khala",
        image: ""
    },
    {
        name: "King Charles Spaniel",
        image: ""
    },
    {
        name: "King Shepherd",
        image: ""
    },
    {
        name: "Kintamani",
        image: ""
    },
    {
        name: "Kishu",
        image: ""
    },
    {
        name: "Kokoni",
        image: ""
    },
    {
        name: "Kombai",
        image: ""
    },
    {
        name: "Komondor",
        image: ""
    },
    {
        name: "Kooikerhondje",
        image: ""
    },
    {
        name: "Koolie",
        image: ""
    },
    {
        name: "Koyun dog",
        image: ""
    },
    {
        name: "Kromfohrländer",
        image: ""
    },
    {
        name: "Kuchi",
        image: ""
    },
    {
        name: "Kunming dog",
        image: ""
    },
    {
        name: "Kurdish Mastiff",
        image: ""
    },
    {
        name: "Kuvasz",
        image: ""
    },
    {
        name: "Labrador Retriever",
        image: ""
    },
    {
        name: "Lagotto Romagnolo",
        image: ""
    },
    {
        name: "Lakeland Terrier",
        image: ""
    },
    {
        name: "Lancashire Heeler",
        image: ""
    },
    {
        name: "Landseer",
        image: ""
    },
    {
        name: "Lapponian Herder",
        image: ""
    },
    {
        name: "Large Münsterländer",
        image: ""
    },
    {
        name: "Leonberger",
        image: ""
    },
    {
        name: "Levriero Sardo",
        image: ""
    },
    {
        name: "Lhasa Apso",
        image: ""
    },
    {
        name: "Liangshan Dog",
        image: ""
    },
    {
        name: "Lithuanian Hound",
        image: ""
    },
    {
        name: "Lobito Herreño",
        image: ""
    },
    {
        name: "Löwchen",
        image: ""
    },
    {
        name: "Lupo Italiano",
        image: ""
    },
    {
        name: "Mackenzie River husky",
        image: ""
    },
    {
        name: "Magyar agár",
        image: ""
    },
    {
        name: "Mahratta Greyhound",
        image: ""
    },
    {
        name: "Maltese",
        image: ""
    },
    {
        name: "Manchester Terrier",
        image: ""
    },
    {
        name: "Maneto",
        image: ""
    },
    {
        name: "Maremmano-Abruzzese Sheepdog",
        image: ""
    },
    {
        name: "McNab dog",
        image: ""
    },
    {
        name: "Miniature American Shepherd",
        image: ""
    },
    {
        name: "Miniature Bull Terrier",
        image: ""
    },
    {
        name: "Miniature Fox Terrier",
        image: ""
    },
    {
        name: "Miniature Pinscher",
        image: ""
    },
    {
        name: "Miniature Schnauzer",
        image: ""
    },
    {
        name: "Molossus of Epirus",
        image: ""
    },
    {
        name: "Mongrel",
        image: ""
    },
    {
        name: "Montenegrin Mountain Hound",
        image: ""
    },
    {
        name: "Mountain Cur",
        image: ""
    },
    {
        name: "Mountain Feist",
        image: ""
    },
    {
        name: "Mucuchies",
        image: ""
    },
    {
        name: "Mudhol Hound",
        image: ""
    },
    {
        name: "Mudi",
        image: ""
    },
    {
        name: "Neapolitan Mastiff",
        image: ""
    },
    {
        name: "Nenets Herding Laika",
        image: ""
    },
    {
        name: "New Guinea singing dog",
        image: ""
    },
    {
        name: "New Zealand Heading Dog",
        image: ""
    },
    {
        name: "Newfoundland",
        image: ""
    },
    {
        name: "Norfolk Terrier",
        image: ""
    },
    {
        name: "Norrbottenspets",
        image: ""
    },
    {
        name: "Northern Inuit Dog",
        image: ""
    },
    {
        name: "Norwegian Buhund",
        image: ""
    },
    {
        name: "Norwegian Elkhound",
        image: ""
    },
    {
        name: "Norwegian Lundehund",
        image: ""
    },
    {
        name: "Norwich Terrier",
        image: ""
    },
    {
        name: "Nova Scotia Duck Tolling Retriever",
        image: ""
    },
    {
        name: "Old Danish Pointer",
        image: ""
    },
    {
        name: "Old English Sheepdog",
        image: ""
    },
    {
        name: "Old English Terrier",
        image: ""
    },
    {
        name: "Olde English Bulldogge",
        image: ""
    },
    {
        name: "Otterhound",
        image: ""
    },
    {
        name: "Pachon Navarro",
        image: ""
    },
    {
        name: "Pampas Deerhound",
        image: ""
    },
    {
        name: "Papillon",
        image: ""
    },
    {
        name: "Parson Russell Terrier",
        image: ""
    },
    {
        name: "Pastore della Lessinia' e del Lagorai",
        image: ""
    },
    {
        name: "Patagonian Sheepdog",
        image: ""
    },
    {
        name: "Patterdale Terrier",
        image: ""
    },
    {
        name: "Pekingese",
        image: ""
    },
    {
        name: "Pembroke Welsh Corgi",
        image: ""
    },
    {
        name: "Perro Majorero",
        image: ""
    },
    {
        name: "Perro de Pastor Mallorquin",
        image: ""
    },
    {
        name: "Perro de Presa Canario",
        image: ""
    },
    {
        name: "Perro de Presa Mallorquin",
        image: ""
    },
    {
        name: "Peruvian Inca Orchid",
        image: ""
    },
    {
        name: "Petit Basset Griffon Vendéen",
        image: ""
    },
    {
        name: "Petit Bleu de Gascogne",
        image: ""
    },
    {
        name: "Phalène",
        image: ""
    },
    {
        name: "Pharaoh Hound",
        image: ""
    },
    {
        name: "Phu Quoc Ridgeback",
        image: ""
    },
    {
        name: "Picardy Spaniel",
        image: ""
    },
    {
        name: "Plummer Terrier",
        image: ""
    },
    {
        name: "Plott Hound",
        image: ""
    },
    {
        name: "Podenco Andaluz",
        image: ""
    },
    {
        name: "Podenco Canario",
        image: ""
    },
    {
        name: "Podenco Valenciano",
        image: ""
    },
    {
        name: "Pointer",
        image: ""
    },
    {
        name: "Poitevin",
        image: ""
    },
    {
        name: "Polish Greyhound",
        image: ""
    },
    {
        name: "Polish Hound",
        image: ""
    },
    {
        name: "Polish Lowland Sheepdog",
        image: ""
    },
    {
        name: "Polish Tatra Sheepdog",
        image: ""
    },
    {
        name: "Pomeranian",
        image: ""
    },
    {
        name: "Pont-Audemer Spaniel",
        image: ""
    },
    {
        name: "Poodle",
        image: ""
    },
    {
        name: "Porcelaine",
        image: ""
    },
    {
        name: "Portuguese Podengo",
        image: ""
    },
    {
        name: "Portuguese Pointer",
        image: ""
    },
    {
        name: "Portuguese Water Dog",
        image: ""
    },
    {
        name: "Posavac Hound",
        image: ""
    },
    {
        name: "Pražský Krysařík",
        image: ""
    },
    {
        name: "Pudelpointer",
        image: ""
    },
    {
        name: "Pug",
        image: ""
    },
    {
        name: "Puli",
        image: ""
    },
    {
        name: "Pumi",
        image: ""
    },
    {
        name: "Pungsan dog",
        image: ""
    },
    {
        name: "Pyrenean Mastiff",
        image: ""
    },
    {
        name: "Pyrenean Mountain Dog",
        image: ""
    },
    {
        name: "Pyrenean Sheepdog",
        image: ""
    },
    {
        name: "Rafeiro do Alentejo",
        image: ""
    },
    {
        name: "Rajapalayam",
        image: ""
    },
    {
        name: "Rampur Greyhound",
        image: ""
    },
    {
        name: "Rat Terrier",
        image: ""
    },
    {
        name: "Ratonero Bodeguero Andaluz",
        image: ""
    },
    {
        name: "Ratonero Mallorquin",
        image: ""
    },
    {
        name: "Ratonero Murciano",
        image: ""
    },
    {
        name: "Ratonero Valenciano",
        image: ""
    },
    {
        name: "Redbone Coonhound",
        image: ""
    },
    {
        name: "Rhodesian Ridgeback",
        image: ""
    },
    {
        name: "Romanian Mioritic Shepherd Dog",
        image: ""
    },
    {
        name: "Romanian Raven Shepherd Dog",
        image: ""
    },
    {
        name: "Rottweiler",
        image: ""
    },
    {
        name: "Rough Collie",
        image: ""
    },
    {
        name: "Russian Spaniel",
        image: ""
    },
    {
        name: "Russian Toy",
        image: ""
    },
    {
        name: "Russo-European Laika",
        image: ""
    },
    {
        name: "Ryukyu Inu",
        image: ""
    },
    {
        name: "Saarloos Wolfdog",
        image: ""
    },
    {
        name: "Sabueso Español",
        image: ""
    },
    {
        name: "Saint Bernard",
        image: ""
    },
    {
        name: "Saint Hubert Jura Hound",
        image: ""
    },
    {
        name: "Saint Miguel Cattle Dog",
        image: ""
    },
    {
        name: "Saint-Usuge Spaniel",
        image: ""
    },
    {
        name: "Saluki",
        image: ""
    },
    {
        name: "Samoyed",
        image: ""
    },
    {
        name: "Sapsali",
        image: ""
    },
    {
        name: "Sarabi dog",
        image: ""
    },
    {
        name: "Sardinian Shepherd Dog",
        image: ""
    },
    {
        name: "Šarplaninac",
        image: ""
    },
    {
        name: "Schapendoes",
        image: ""
    },
    {
        name: "Schillerstövare",
        image: ""
    },
    {
        name: "Schipperke",
        image: ""
    },
    {
        name: "Schweizer Laufhund",
        image: ""
    },
    {
        name: "Schweizerischer Niederlaufhund",
        image: ""
    },
    {
        name: "Scottish Deerhound",
        image: ""
    },
    {
        name: "Scottish Terrier",
        image: ""
    },
    {
        name: "Sealyham Terrier",
        image: ""
    },
    {
        name: "Segugio dell'Appennino",
        image: ""
    },
    {
        name: "Segugio Italiano",
        image: ""
    },
    {
        name: "Segugio Maremmano",
        image: ""
    },
    {
        name: "Serbian Hound",
        image: ""
    },
    {
        name: "Serbian Tricolour Hound",
        image: ""
    },
    {
        name: "Serrano Bulldog",
        image: ""
    },
    {
        name: "Shar Pei",
        image: ""
    },
    {
        name: "Shetland Sheepdog",
        image: ""
    },
    {
        name: "Shiba Inu",
        image: ""
    },
    {
        name: "Shih Tzu",
        image: ""
    },
    {
        name: "Shikoku",
        image: ""
    },
    {
        name: "Shiloh Shepherd",
        image: ""
    },
    {
        name: "Siberian Husky",
        image: ""
    },
    {
        name: "Silken Windhound",
        image: ""
    },
    {
        name: "Silky Terrier",
        image: ""
    },
    {
        name: "Sinhala Hound",
        image: ""
    },
    {
        name: "Skye Terrier",
        image: ""
    },
    {
        name: "Sloughi",
        image: ""
    },
    {
        name: "Slovakian Wirehaired Pointer",
        image: ""
    },
    {
        name: "Slovenský Cuvac",
        image: ""
    },
    {
        name: "Slovenský Kopov",
        image: ""
    },
    {
        name: "Smalandstövare",
        image: ""
    },
    {
        name: "Small Greek domestic dog",
        image: ""
    },
    {
        name: "Small Münsterländer",
        image: ""
    },
    {
        name: "Smithfield",
        image: ""
    },
    {
        name: "Smooth Collie",
        image: ""
    },
    {
        name: "Smooth Fox Terrier",
        image: ""
    },
    {
        name: "Soft-Coated Wheaten Terrier",
        image: ""
    },
    {
        name: "South Russian Ovcharka",
        image: ""
    },
    {
        name: "Spanish Mastiff",
        image: ""
    },
    {
        name: "Spanish Water Dog",
        image: ""
    },
    {
        name: "Spino degli Iblei",
        image: ""
    },
    {
        name: "Spinone Italiano",
        image: ""
    },
    {
        name: "Sporting Lucas Terrier",
        image: ""
    },
    {
        name: "Stabyhoun",
        image: ""
    },
    {
        name: "Staffordshire Bull Terrier",
        image: ""
    },
    {
        name: "Standard Schnauzer",
        image: ""
    },
    {
        name: "Stephens Stock",
        image: ""
    },
    {
        name: "Styrian Coarse-haired Hound",
        image: ""
    },
    {
        name: "Sussex Spaniel",
        image: ""
    },
    {
        name: "Swedish Lapphund",
        image: ""
    },
    {
        name: "Swedish Vallhund",
        image: ""
    },
    {
        name: "Swinford Bandog",
        image: ""
    },
    {
        name: "Taigan",
        image: ""
    },
    {
        name: "Taiwan Dog",
        image: ""
    },
    {
        name: "Tamaskan Dog",
        image: ""
    },
    {
        name: "Tang Dog",
        image: ""
    },
    {
        name: "Tarsus çatalburun",
        image: ""
    },
    {
        name: "Tazy",
        image: ""
    },
    {
        name: "Teddy Roosevelt Terrier",
        image: ""
    },
    {
        name: "Telomian",
        image: ""
    },
    {
        name: "Tenterfield Terrier",
        image: ""
    },
    {
        name: "Terrier Brasileiro",
        image: ""
    },
    {
        name: "Thai Bangkaew Dog",
        image: ""
    },
    {
        name: "Thai Ridgeback",
        image: ""
    },
    {
        name: "Tibetan Kyi Apso",
        image: ""
    },
    {
        name: "Tibetan Mastiff",
        image: ""
    },
    {
        name: "Tibetan Spaniel",
        image: ""
    },
    {
        name: "Tibetan Terrier",
        image: ""
    },
    {
        name: "Tonya Finosu",
        image: ""
    },
    {
        name: "Torkuz",
        image: ""
    },
    {
        name: "Tornjak",
        image: ""
    },
    {
        name: "Tosa Inu",
        image: ""
    },
    {
        name: "Toy Fox Terrier",
        image: ""
    },
    {
        name: "Toy Manchester Terrier",
        image: ""
    },
    {
        name: "Transylvanian Hound",
        image: ""
    },
    {
        name: "Treeing Cur",
        image: ""
    },
    {
        name: "Treeing Feist",
        image: ""
    },
    {
        name: "Treeing Tennessee Brindle",
        image: ""
    },
    {
        name: "Treeing Walker Coonhound",
        image: ""
    },
    {
        name: "Trigg Hound",
        image: ""
    },
    {
        name: "Tyrolean Hound",
        image: ""
    },
    {
        name: "Vikhan",
        image: ""
    },
    {
        name: "Villano de Las Encartaciones",
        image: ""
    },
    {
        name: "Villanuco de Las Encartaciones",
        image: ""
    },
    {
        name: "Vizsla",
        image: ""
    },
    {
        name: "Volkosob",
        image: ""
    },
    {
        name: "Volpino Italiano",
        image: ""
    },
    {
        name: "Weimaraner",
        image: ""
    },
    {
        name: "Welsh Hound",
        image: ""
    },
    {
        name: "Welsh Sheepdog",
        image: ""
    },
    {
        name: "Welsh Springer Spaniel",
        image: ""
    },
    {
        name: "Welsh Terrier",
        image: ""
    },
    {
        name: "West Country Harrier",
        image: ""
    },
    {
        name: "West Highland White Terrier",
        image: ""
    },
    {
        name: "West Siberian Laika",
        image: ""
    },
    {
        name: "Westphalian Dachsbracke",
        image: ""
    },
    {
        name: "Wetterhoun",
        image: ""
    },
    {
        name: "Whippet",
        image: ""
    },
    {
        name: "White Shepherd",
        image: ""
    },
    {
        name: "White Swiss Shepherd Dog",
        image: ""
    },
    {
        name: "Wire Fox Terrier",
        image: ""
    },
    {
        name: "Wirehaired Pointing Griffon",
        image: ""
    },
    {
        name: "Wirehaired Vizsla",
        image: ""
    },
    {
        name: "Xiasi Dog",
        image: ""
    },
    {
        name: "Xoloitzcuintle",
        image: ""
    },
    {
        name: "Yakutian Laika",
        image: ""
    },
    {
        name: "Yorkshire Terrier",
        image: ""
    },
    {
        name: "Zerdava",
        image: "https://i.ytimg.com/vi/i4x0fvLSjpc/mqdefault.jpg"
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
