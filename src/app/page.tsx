import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
          {/* NAVBAR  */}
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
              <a className="navbar-brand nav-logo-text" href="/">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo.png"
                  alt="go4explore"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="main">
                  {/* <li class="nav-item px-0 d-inline-block px-lg-2">
      <a class="nav-link nav-link-text d-inline-block" aria-current="page" href="https://go4explore.com/country/India">Travel Guides</a>
    </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                      href="https://go4explore.com/trips"
                    >
                      Trips
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link px-0 d-inline-block px-lg-3 nav-link-text"
                      href="https://go4explore.com/upcoming-trips"
                    >
                      Upcoming Trips
                    </a>
                  </li>
                  {/*<li class="nav-item">
      <a class="nav-link px-0 d-inline-block px-lg-3 nav-link-text" href="https://go4explore.com/forum">Forums</a>
    </li>
  <li class="nav-item">
      <a class="nnav-link px-0 d-inline-block px-lg-3 nav-link-text Grand-Travel-Sale" href="https://go4explore.com/sale">Grand Travel Sale</a>
    </li>*/}
                  {/* <li class="nav-item">
      <a class="nav-link px-0 d-inline-block px-lg-3 nav-link-text" href="https://go4explore.com/stories">Stories</a>
    </li>
  <li class="nav-item">
      <a class="nav-link px-0 d-inline-block px-lg-3 nav-link-text" href="https://go4explore.com/blogs/">Blog</a>
    </li> */}
                </ul>
                <div className="register-login d-flex align-items-center">
                  <a className="tel" href="tel:8700923377">
                    <i className="bi bi-telephone-fill" />
                    +91 8700923377
                  </a>
                  <a href="https://go4explore.com/login" className="login-btn">
                    <i className="bi bi-person-fill" /> Login
                  </a>
                  {/*<a href="https://go4explore.com/register" class="register-btn"><i class="bi bi-people-fill"></i>  Register
</a>*/}
                </div>
                {/* ICONS  */}
                {/*<div class="d-flex align-items-center flex-row">
      <div class="d-flex align-items-center">
        <span>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="black" />
            <path
              d="M17.7507 18.4764L19.1715 17.0551C19.3629 16.866 19.605 16.7366 19.8685 16.6825C20.1319 16.6284 20.4054 16.652 20.6558 16.7505L22.3874 17.4421C22.6403 17.5448 22.8572 17.7202 23.0107 17.946C23.1643 18.1719 23.2475 18.4381 23.25 18.7112V21.884C23.2485 22.0697 23.2095 22.2533 23.1352 22.4236C23.061 22.5939 22.953 22.7474 22.8179 22.8748C22.6828 23.0023 22.5233 23.1011 22.349 23.1653C22.1748 23.2294 21.9893 23.2576 21.8038 23.2482C9.66984 22.4931 7.22148 12.2135 6.75845 8.27928C6.73695 8.08609 6.75659 7.89053 6.81607 7.70547C6.87555 7.52041 6.97352 7.35005 7.10354 7.20559C7.23356 7.06113 7.39269 6.94585 7.57044 6.86733C7.74819 6.78881 7.94055 6.74883 8.13486 6.75003H11.1985C11.4719 6.75084 11.7388 6.83345 11.9648 6.98724C12.1909 7.14103 12.3658 7.35896 12.4671 7.61301L13.1584 9.34532C13.2601 9.59474 13.286 9.86859 13.233 10.1327C13.18 10.3968 13.0504 10.6393 12.8603 10.8302L11.4395 12.2515C11.4395 12.2515 12.2577 17.7911 17.7507 18.4764Z"
              fill="white" />
          </svg>
        </span>
        <p class="nav-link-text my-auto me-3 ms-2"></p>
      </div>
      <div class="my-2 my-lg-0 mx-lg-2">
          <a >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                  d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 6C17.895 6 20.25 8.355 20.25 11.25C20.25 14.145 17.895 16.5 15 16.5C12.105 16.5 9.75 14.145 9.75 11.25C9.75 8.355 12.105 6 15 6ZM15 27C11.955 27 8.355 25.77 5.79 22.68C8.41741 20.6186 11.6604 19.4982 15 19.4982C18.3396 19.4982 21.5826 20.6186 24.21 22.68C21.645 25.77 18.045 27 15 27Z"
                  fill="black" />
              </svg>
          </a>

    </div>

      
    </div>*/}
              </div>
            </div>
          </nav>
          {/*---- HERO SECTION ----*/}
          <section
            className="hero-section"
            style={{
              background:
                "rgba(0, 0, 0, 0.671) url(https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/testimonial-thumbnail.png) center center / cover",
            }}
          >
            <div className="container">
              <div className="hero-content-wrapper">
                <div className="pt-5">
                  <h2 className="text-white text-center">
                    Explore More To Feel Alive
                  </h2>
                </div>
                <div className="pt-5">
                  <div className="d-flex">
                    <div className="home-hero-section-packages packages cursor-pointer px-2 px-md-4 py-3 active">
                      <span id="Packages">Trip Packages</span>
                    </div>
                    <div className="home-hero-section-packages guides cursor-pointer px-2 px-md-4 py-3 mx-1 mx-md-3">
                      <span id="Guides">Travel Guides</span>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="serch-location-icon">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/navigation-pin.png"
                        alt="location"
                      />
                    </div>
                    <input
                      id="packagePicker"
                      name="friend[id]"
                      type="text"
                      className="typeahead"
                      autoComplete="off"
                      placeholder="Pick a best suitable package for you"
                      data-provide="typeahead"
                    />
                    <input
                      id="TravelGuides"
                      name="friend[id]"
                      type="text"
                      className="typeahead"
                      autoComplete="off"
                      placeholder="Where are you planing to explore next?"
                      data-provide="typeahead"
                    />
                    <input type="hidden" defaultValue="" id="guidelink" />
                    <Image
                      width={100}
                      height={100}
                      id="search"
                      className="search-icon"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/zoom.png"
                      alt="icon"
                    />
                    <Image
                      width={100}
                      height={100}
                      id="search1"
                      className="search-icon d-none"
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/zoom.png"
                      alt="icon"
                    />
                  </div>
                </div>
                <input
                  type="hidden"
                  id="searchvalues"
                  defaultValue='[{"itemCode":"Hansi","itemName":"Hansi"},{"itemCode":"Saputara","itemName":"Saputara"},{"itemCode":"Vadodara","itemName":"Vadodara"},{"itemCode":"Ujjain","itemName":"Ujjain"},{"itemCode":"Bhrigu-Lake","itemName":"Bhrigu Lake"},{"itemCode":"Sissu","itemName":"Sissu"},{"itemCode":"Chennai","itemName":"Chennai"},{"itemCode":"Madurai","itemName":"Madurai"},{"itemCode":"Mahabalipuram","itemName":"Mahabalipuram"},{"itemCode":"Bikaner","itemName":"Bikaner"},{"itemCode":"Udaipur","itemName":"Udaipur"},{"itemCode":"Nainital","itemName":"Nainital"},{"itemCode":"Kanatal","itemName":"Kanatal"},{"itemCode":"Rishikesh","itemName":"Rishikesh"},{"itemCode":"Somnath","itemName":"Somnath"},{"itemCode":"Dwarka","itemName":"Dwarka"},{"itemCode":"Kutch","itemName":"Kutch"},{"itemCode":"Kutch","itemName":"Rann of Kutch"},{"itemCode":"Rameshwaram","itemName":"Rameshwaram"},{"itemCode":"Nako","itemName":"Nako"},{"itemCode":"Banjar","itemName":"Banjar"},{"itemCode":"Kinner-Kailash-Trek","itemName":"Kinner Kailash Trek"},{"itemCode":"Janjehli-Valley","itemName":"Janjehli Valley"},{"itemCode":"Darma-Valley","itemName":"Darma Valley"},{"itemCode":"Gangotri-Dham","itemName":"Gangotri Dham"},{"itemCode":"Yamunotri-Dham","itemName":"Yamunotri Dham"},{"itemCode":"Jaisalmer","itemName":"Jaisalmer"},{"itemCode":"Kanyakumari","itemName":"Kanyakumari"},{"itemCode":"Dhanushkodi","itemName":"Dhanushkodi"},{"itemCode":"Hogenakkal","itemName":"Hogenakkal"},{"itemCode":"Chidambaram","itemName":"Chidambaram"},{"itemCode":"Yelagiri","itemName":"Yelagiri"},{"itemCode":"Thanjavur","itemName":"Thanjavur"},{"itemCode":"Velankanni","itemName":"Velankanni"},{"itemCode":"Ooty","itemName":"Ooty"},{"itemCode":"Yercaud","itemName":"Yercaud"},{"itemCode":"Valparai","itemName":"Valparai"},{"itemCode":"Kotagiri","itemName":"Kotagiri"},{"itemCode":"Coonoor","itemName":"Coonoor"},{"itemCode":"Kodaikanal","itemName":"Kodaikanal"},{"itemCode":"Mount-Abu","itemName":"Mount Abu"},{"itemCode":"Pushkar","itemName":"Pushkar"},{"itemCode":"Jodhpur","itemName":"Jodhpur"},{"itemCode":"Hanumangarh","itemName":"Hanumangarh"},{"itemCode":"Chittorgarh","itemName":"Chittorgarh"},{"itemCode":"Ajmer","itemName":"Ajmer"},{"itemCode":"Ganganagar","itemName":"Ganganagar"},{"itemCode":"Ganganagar","itemName":"Sri ganganagar"},{"itemCode":"Kota","itemName":"Kota"},{"itemCode":"Pondicherry","itemName":"Pondicherry"},{"itemCode":"Pondicherry","itemName":"Puducherry"},{"itemCode":"Jibhi","itemName":"Jibhi"},{"itemCode":"Jibhi","itemName":"Jalori Pass"},{"itemCode":"Jibhi","itemName":"Shoja"},{"itemCode":"Jibhi","itemName":"Ghiyagi"},{"itemCode":"Dharamsala","itemName":"Dharamsala"},{"itemCode":"Spiti-Valley","itemName":"Spiti Valley"},{"itemCode":"Spiti-Valley","itemName":"Spiti"},{"itemCode":"Triund-Trek","itemName":"Triund Trek"},{"itemCode":"Triund-Trek","itemName":"Triund"},{"itemCode":"Mussoorie","itemName":"Mussoorie"},{"itemCode":"Indore","itemName":"Indore"},{"itemCode":"Tungnath","itemName":"Tungnath"},{"itemCode":"Chopta-Chandrashila-Trek","itemName":"Chopta Chandrashila Trek"},{"itemCode":"Chopta-Chandrashila-Trek","itemName":"Deoriatal"},{"itemCode":"Chopta-Chandrashila-Trek","itemName":"Chopta"},{"itemCode":"Chopta-Chandrashila-Trek","itemName":"Chandrashila"},{"itemCode":"Malana","itemName":"Malana"},{"itemCode":"Chanderi","itemName":"Chanderi"},{"itemCode":"Bhopal","itemName":"Bhopal"},{"itemCode":"Bhrigu-Lake-Trek","itemName":"Bhrigu Lake Trek"},{"itemCode":"Amritsar","itemName":"Amritsar"},{"itemCode":"Amritsar","itemName":"Wagah border"},{"itemCode":"Amritsar","itemName":"Golden temple"},{"itemCode":"Srinagar","itemName":"Srinagar"},{"itemCode":"Srinagar","itemName":"Kashmir"},{"itemCode":"Prashar-Lake","itemName":"Prashar Lake"},{"itemCode":"Prashar-Lake","itemName":"Prashar"},{"itemCode":"Manali","itemName":"Manali"},{"itemCode":"Manali","itemName":"Rohtang Pass"},{"itemCode":"Manali","itemName":"Gulaba"},{"itemCode":"Manali","itemName":"Atal Tunnel"},{"itemCode":"Manali","itemName":"Sethan"},{"itemCode":"Bir-Billing","itemName":"Bir Billing"},{"itemCode":"Bir-Billing","itemName":"Bir"},{"itemCode":"Bir-Billing","itemName":"Billing"},{"itemCode":"Bir-Billing","itemName":"Bir biling"},{"itemCode":"Tirthan-Valley","itemName":"Tirthan Valley"},{"itemCode":"Tirthan-Valley","itemName":"Tirthan"}]'
                />
                <input
                  type="hidden"
                  id="packagevalues"
                  defaultValue='[{"itemCode":["6-days-tour-bali-with-balinese-spa"],"itemName":"6 Days tour Bali with Balinese Spa"},{"itemCode":["ali-bedni-bughyal"],"itemName":"Ali Bedni Bughyal"},{"itemCode":["all-girls-ladakh-trip-with-turtuk"],"itemName":"All Girls Ladakh Trip with Turtuk"},{"itemCode":["all-girls-manali-leh-trip"],"itemName":"All Girls Manali Leh Trip"},{"itemCode":["all-girls-spiti-valley-trip"],"itemName":"All Girls Spiti Valley Trip"},{"itemCode":["almaty-5d4n-kazakhstan"],"itemName":"Almaty 5D4N Kazakhstan"},{"itemCode":["alpather-lake-trek"],"itemName":"Alpather Lake Trek"},{"itemCode":["andaman-3d2n"],"itemName":"Andaman 3D2N"},{"itemCode":["andaman-4d3n"],"itemName":"Andaman 4D3N"},{"itemCode":["andaman-5d4n"],"itemName":"Andaman 5D4N"},{"itemCode":["andaman-6d5n"],"itemName":"Andaman 6D5N"},{"itemCode":["andaman-7d6n"],"itemName":"Andaman 7D6N"},{"itemCode":["andaman-8d7n"],"itemName":"Andaman 8D7N"},{"itemCode":["andaman-9d8n"],"itemName":"Andaman 9D8N"},{"itemCode":["andharban-forest-trek"],"itemName":"Andharban Forest Trek"},{"itemCode":["atv-ride-in-gulmarg"],"itemName":"ATV Ride in Gulmarg"},{"itemCode":["auli-joshimath"],"itemName":"Auli & Joshimath"},{"itemCode":["australia-6n7d"],"itemName":"Australia 6N\/7D"},{"itemCode":["azerbaijan-georgia"],"itemName":"Azerbaijan & Georgia"},{"itemCode":["azerbaijan-5d4n"],"itemName":"Azerbaijan 5D4N"},{"itemCode":["azerbaizan-6d5n"],"itemName":"Azerbaizan 6D5N"},{"itemCode":["backcountry-day-tour"],"itemName":"Backcountry Day Tour"},{"itemCode":["bali-ultimate-7-days"],"itemName":"Bali - Ultimate 7 Days"},{"itemCode":["bali-water-villa-stay"],"itemName":"Bali - Water Villa Stay"},{"itemCode":["bali-malaysia"],"itemName":"Bali & Malaysia"},{"itemCode":["bali-singapore"],"itemName":"Bali & Singapore"},{"itemCode":["bali-backpacking"],"itemName":"Bali Backpacking"},{"itemCode":["bali-backpacking-10d9n"],"itemName":"Bali Backpacking 10D9N"},{"itemCode":["bali-new-year-special"],"itemName":"Bali New Year Special"},{"itemCode":["bali-with-nusa-penida-honeymoon-special"],"itemName":"Bali with Nusa Penida- Honeymoon Special"},{"itemCode":["bangkok-krabi-phuket-7n8d"],"itemName":"Bangkok Krabi Phuket 7N8D"},{"itemCode":["bangkok-pattaya-leisure-escape"],"itemName":"Bangkok Pattaya - Leisure Escape"},{"itemCode":["bangkok-pattaya-5d4n"],"itemName":"Bangkok Pattaya 5D4N"},{"itemCode":["bangkok-pattaya-6d5n"],"itemName":"Bangkok Pattaya 6D5N"},{"itemCode":["bangkok-pattaya-6d5n"],"itemName":"Bangkok Pattaya 6D5N"},{"itemCode":["bangkok-pattaya-7d6n"],"itemName":"Bangkok Pattaya 7D6N"},{"itemCode":["bhrigu-lake-trek"],"itemName":"Bhrigu Lake Trek"},{"itemCode":["bhutan-backpacking-8d7n"],"itemName":"Bhutan Backpacking - 8D7N"},{"itemCode":["bhutan-backpacking-7d6n"],"itemName":"Bhutan Backpacking 7D6N"},{"itemCode":["bir-billing"],"itemName":"Bir Billing"},{"itemCode":["brahmatal-trek"],"itemName":"Brahmatal Trek"},{"itemCode":["chadar-trek"],"itemName":"Chadar Trek"},{"itemCode":["chakrata"],"itemName":"Chakrata"},{"itemCode":["chakrata-corporate-trip"],"itemName":"Chakrata Corporate Trip"},{"itemCode":["chanshal-pass"],"itemName":"Chanshal Pass"},{"itemCode":["char-dham-yatra"],"itemName":"Char Dham Yatra"},{"itemCode":["char-dham-yatra-ex-haridwar-dehradun"],"itemName":"Char Dham Yatra Ex Haridwar-Dehradun"},{"itemCode":["charismatic-kashmir-tour-packages"],"itemName":"Charismatic Kashmir Tour Packages"},{"itemCode":["chopta-tungnath-deoriatal"],"itemName":"Chopta-Tungnath-Deoriatal"},{"itemCode":["dayara-bugyal-trek"],"itemName":"Dayara Bugyal Trek"},{"itemCode":["delhi-agra-jaipur"],"itemName":"Delhi Agra Jaipur"},{"itemCode":["devkund-waterfall-trek"],"itemName":"Devkund Waterfall Trek"},{"itemCode":["dharamsala-mcleodganj-3d2n"],"itemName":"Dharamsala Mcleodganj 3D2N"},{"itemCode":["dharamshala-dalhousie"],"itemName":"Dharamshala Dalhousie"},{"itemCode":["do-dham-yatra-kedarnath-badrinath"],"itemName":"Do Dham Yatra - Kedarnath Badrinath"},{"itemCode":["dubai-6d5n"],"itemName":"Dubai - 6D5N"},{"itemCode":["dubai-5d4n"],"itemName":"Dubai 5D4N"},{"itemCode":["dubai-5d4n-with-ferrari-world"],"itemName":"Dubai 5D4N with Ferrari World"},{"itemCode":["dubai-6d5n-with-adventure-activities"],"itemName":"Dubai 6D5N with Adventure Activities"},{"itemCode":["dubai-7d6n"],"itemName":"Dubai 7D6N"},{"itemCode":["dubai-4d3n"],"itemName":"Dubai-4D3N"},{"itemCode":["enthralling-europe-tour"],"itemName":"Enthralling Europe Tour"},{"itemCode":["europe-explorer-trip-13d12n"],"itemName":"Europe Explorer Trip 13D12N"},{"itemCode":["exquisite-baku-tour-package-from-india"],"itemName":"Exquisite Baku Tour Package From India"},{"itemCode":["fantastic-goa"],"itemName":"Fantastic Goa"},{"itemCode":["gangtok-darjeeling"],"itemName":"Gangtok & Darjeeling"},{"itemCode":["georgia-4d3n"],"itemName":"Georgia 4D3N"},{"itemCode":["georgia-5d4n"],"itemName":"Georgia 5D4N"},{"itemCode":["goa-4d3n"],"itemName":"Goa 4D3N"},{"itemCode":["gokarna"],"itemName":"Gokarna"},{"itemCode":["gulmarg-1-day-adventure-activities"],"itemName":"Gulmarg 1 day Adventure Activities"},{"itemCode":["gulmarg-3-days-2-nights"],"itemName":"Gulmarg 3 Days 2 Nights"},{"itemCode":["gulmarg-srinagar-5-days-4-nights"],"itemName":"Gulmarg Srinagar 5 days 4 nights"},{"itemCode":["hampta-pass-trek"],"itemName":"Hampta Pass Trek"},{"itemCode":["har-ki-doon-trek"],"itemName":"Har Ki Doon Trek"},{"itemCode":["harihar-fort-trek"],"itemName":"Harihar Fort Trek"},{"itemCode":["harishchandragad-trek"],"itemName":"Harishchandragad Trek"},{"itemCode":["himachal-backpacking-jibhi-edition"],"itemName":"Himachal Backpacking - Jibhi Edition"},{"itemCode":["himachal-backpacking-manali-kasol-jibhi"],"itemName":"Himachal Backpacking - Manali Kasol Jibhi"},{"itemCode":["himachal-backpacking-summer-edition"],"itemName":"Himachal Backpacking - Summer Edition"},{"itemCode":["himachal-backpacking-9d8n"],"itemName":"Himachal Backpacking 9D8N"},{"itemCode":["himachal-backpacking-summer-special"],"itemName":"Himachal Backpacking Summer Special"},{"itemCode":["himachal-road-trip-6d-5n"],"itemName":"Himachal Road Trip 6D 5N"},{"itemCode":["himachal-road-trip-8-days-7-nights"],"itemName":"Himachal Road Trip 8 Days 7 Nights"},{"itemCode":["ho-chi-minh-hanoi-6d5n"],"itemName":"Ho Chi Minh & Hanoi 6D5N"},{"itemCode":["honeymoon-special-phuket-krabi"],"itemName":"Honeymoon Special - Phuket Krabi"},{"itemCode":["honeymoon-special-phuket-krabi"],"itemName":"Honeymoon Special Phuket Krabi"},{"itemCode":["honeymoon-special-chandigarh-shimla-manali"],"itemName":"Honeymoon Special- Chandigarh Shimla Manali"},{"itemCode":["honeymoon-special-himachal-pardesh"],"itemName":"Honeymoon Special- Himachal Pardesh"},{"itemCode":["honeymoon-special-shimla-to-manali"],"itemName":"Honeymoon Special- Shimla to Manali"},{"itemCode":["indrahar-pass-trek"],"itemName":"Indrahar Pass Trek"},{"itemCode":["jaisalmer-and-longewala"],"itemName":"Jaisalmer and Longewala"},{"itemCode":["jibhi-tirthan-valley"],"itemName":"Jibhi & Tirthan Valley"},{"itemCode":["jim-corbett-2d1n"],"itemName":"Jim Corbett  - 2D1N"},{"itemCode":["jim-corbett-ranikhet"],"itemName":"Jim Corbett Ranikhet"},{"itemCode":["jivdhan-fort-trek"],"itemName":"Jivdhan Fort Trek"},{"itemCode":["kalsubai-trek"],"itemName":"Kalsubai Trek"},{"itemCode":["kalu-waterfall"],"itemName":"Kalu Waterfall"},{"itemCode":["kanatal-tehri-lake"],"itemName":"Kanatal & Tehri Lake"},{"itemCode":["kanatal-corporate-trip"],"itemName":"Kanatal Corporate Trip"},{"itemCode":["kareri-lake-trek"],"itemName":"Kareri Lake Trek"},{"itemCode":["kasauli-shimla-4-days-3-nights"],"itemName":"Kasauli Shimla 4 Days 3 Nights"},{"itemCode":["kashmir-gurez-backpacking"],"itemName":"Kashmir & Gurez Backpacking"},{"itemCode":["kashmir-4-days-3-nights"],"itemName":"Kashmir 4 days 3 nights"},{"itemCode":["kashmir-6-days-5-nights"],"itemName":"Kashmir 6 Days 5 Nights"},{"itemCode":["kashmir-8d7n"],"itemName":"Kashmir 8D7N"},{"itemCode":["kashmir-backpacking-summer-edition"],"itemName":"Kashmir Backpacking Summer Edition"},{"itemCode":["kashmir-backpacking-winter-edition"],"itemName":"Kashmir Backpacking Winter Edition"},{"itemCode":["kashmir-great-lakes-trek"],"itemName":"Kashmir Great Lakes Trek"},{"itemCode":["kashmir-honeymoon-package-7-days-6-nights"],"itemName":"Kashmir Honeymoon Package 7 Days 6 Nights"},{"itemCode":["kashmir-offbeat"],"itemName":"Kashmir Offbeat"},{"itemCode":["kasol-grahan-trek"],"itemName":"Kasol Grahan Trek"},{"itemCode":["kasol-kheerganga-trek"],"itemName":"Kasol Kheerganga Trek"},{"itemCode":["kasol-manali-jibhi-honeymoon-trip"],"itemName":"Kasol Manali JIbhi Honeymoon Trip"},{"itemCode":["kasol-tosh-pulga"],"itemName":"Kasol Tosh & Pulga"},{"itemCode":["kausar-nag-lake-trek"],"itemName":"Kausar Nag Lake Trek"},{"itemCode":["kazakhstan-uzbekistan"],"itemName":"Kazakhstan & Uzbekistan"},{"itemCode":["kazakhstan-backpacking"],"itemName":"Kazakhstan Backpacking"},{"itemCode":["kazakhstan-5d4n"],"itemName":"Kazakhstan- 5D4N"},{"itemCode":["kedarkantha-trek"],"itemName":"Kedarkantha Trek"},{"itemCode":["kedarnath-dham"],"itemName":"Kedarnath Dham"},{"itemCode":["kedartal-trek"],"itemName":"Kedartal Trek"},{"itemCode":["kerala-backpacking"],"itemName":"Kerala Backpacking"},{"itemCode":["kodachadri-trek"],"itemName":"Kodachadri Trek"},{"itemCode":["kuari-pass-trek"],"itemName":"Kuari Pass Trek"},{"itemCode":["kullu-manali-4-days-3-nights"],"itemName":"Kullu Manali - 4 Days 3 Nights"},{"itemCode":["leh-ladakh-backpacking-bike-trip"],"itemName":"Leh Ladakh Backpacking Bike Trip"},{"itemCode":["leh-ladakh-with-tso-moriri-turtuk"],"itemName":"Leh Ladakh with Tso Moriri & Turtuk"},{"itemCode":["leh-ladakh-with-turtuk"],"itemName":"Leh Ladakh with Turtuk"},{"itemCode":["leh-srinagar-backpacking-bike-trip"],"itemName":"Leh Srinagar Backpacking Bike Trip"},{"itemCode":["madmaheshwar-trek"],"itemName":"Madmaheshwar Trek"},{"itemCode":["magic-of-srinagar-family-tour-package"],"itemName":"Magic Of Srinagar Family Tour Package"},{"itemCode":["magnificent-meghalaya"],"itemName":"Magnificent Meghalaya"},{"itemCode":["majestic-baku-tour-package-from-india"],"itemName":"Majestic Baku Tour Package From India"},{"itemCode":["majestic-baku-tour-package-from-india"],"itemName":"Majestic Baku Tour Package From India"},{"itemCode":["majestic-kashmir-experience-tour-package"],"itemName":"Majestic Kashmir Experience Tour Package"},{"itemCode":["maldives-5d4n"],"itemName":"Maldives 5D4N"},{"itemCode":["manali-kasol-kheerganga-trek"],"itemName":"Manali & Kasol Kheerganga Trek"},{"itemCode":["manali-rohtang-pass"],"itemName":"Manali & Rohtang Pass"},{"itemCode":["manali-solang-valley"],"itemName":"Manali & Solang Valley"},{"itemCode":["manali-honeymoon-trip-6-days-5-nights"],"itemName":"Manali Honeymoon Trip - 6 Days 5 Nights"},{"itemCode":["manali-jibhi-honeymoon-trip"],"itemName":"Manali Jibhi Honeymoon Trip"},{"itemCode":["manali-jispa"],"itemName":"Manali Jispa"},{"itemCode":["manali-kasol-4d3n"],"itemName":"Manali Kasol 4D3N"},{"itemCode":["manali-kasol-jibhi"],"itemName":"Manali Kasol Jibhi"},{"itemCode":["manali-kasol-kheerganga"],"itemName":"Manali Kasol Kheerganga"},{"itemCode":["manali-leh-backpacking-bike-trip"],"itemName":"Manali Leh Backpacking Bike Trip"},{"itemCode":["manali-leh-srinagar"],"itemName":"Manali Leh Srinagar"},{"itemCode":["manali-leh-srinagar-backpacking-bike-trip"],"itemName":"Manali Leh Srinagar Backpacking Bike Trip"},{"itemCode":["manali-rohtang-kasol-kheerganga"],"itemName":"Manali Rohtang Kasol Kheerganga"},{"itemCode":["manali-sissu"],"itemName":"Manali Sissu"},{"itemCode":["manali-sissu-kasol-kheerganga"],"itemName":"Manali Sissu Kasol Kheerganga"},{"itemCode":["manali-zanskar-leh-bike-trip"],"itemName":"Manali Zanskar Leh Bike Trip"},{"itemCode":["mcleodganj-bir-billing"],"itemName":"Mcleodganj & Bir Billing"},{"itemCode":["mcleodganj-triund-trek"],"itemName":"Mcleodganj & Triund Trek"},{"itemCode":["mcleodganj-triund-bir"],"itemName":"Mcleodganj Triund Bir"},{"itemCode":["meghalaya-4-days-3-nights"],"itemName":"Meghalaya 4 Days 3 Nights"},{"itemCode":["meghalaya-5-days-4-nights"],"itemName":"Meghalaya 5 Days 4 Nights"},{"itemCode":["meghalaya-8-days-7-nights"],"itemName":"Meghalaya 8 Days 7 Nights"},{"itemCode":["meghalaya-backpacking"],"itemName":"Meghalaya Backpacking"},{"itemCode":["meghalaya-with-kaziranga"],"itemName":"Meghalaya with Kaziranga"},{"itemCode":["meghalaya-with-kaziranga-8-days-7-nights"],"itemName":"Meghalaya with Kaziranga 8 Days 7 Nights"},{"itemCode":["munnar-thekkady"],"itemName":"Munnar Thekkady"},{"itemCode":["nag-tibba-trek"],"itemName":"Nag Tibba Trek"},{"itemCode":["nepal-6d5n"],"itemName":"Nepal 6D5N"},{"itemCode":["northern-vietnam-honeymoon-special"],"itemName":"Northern Vietnam - Honeymoon Special"},{"itemCode":["ny-auli-joshimath"],"itemName":"NY Auli & Joshimath"},{"itemCode":["ny-chopta-tungnath"],"itemName":"NY Chopta Tungnath"},{"itemCode":["ny-himachal-backpacking"],"itemName":"NY Himachal Backpacking"},{"itemCode":["ny-jaisalmer-longewala"],"itemName":"Ny Jaisalmer & Longewala"},{"itemCode":["ny-jibhi-tirthan-valley"],"itemName":"NY Jibhi & Tirthan Valley"},{"itemCode":["ny-kalpa-chitkul"],"itemName":"Ny Kalpa Chitkul"},{"itemCode":["ny-kasol-tosh"],"itemName":"NY Kasol Tosh"},{"itemCode":["ny-manali-kasol"],"itemName":"NY Manali Kasol"},{"itemCode":["ny-manali-sissu"],"itemName":"NY Manali Sissu"},{"itemCode":["ny-manali-sissu-kasol-kheerganga"],"itemName":"NY Manali Sissu Kasol Kheerganga"},{"itemCode":["ny-mcleodganj-bir-billing"],"itemName":"NY Mcleodganj Bir Billing"},{"itemCode":["ny-mcleodganj-triund-bir"],"itemName":"NY Mcleodganj Triund Bir"},{"itemCode":["ny-mcleodganj-triund-trek"],"itemName":"NY Mcleodganj Triund Trek"},{"itemCode":["ny-rajasthan-backpacking"],"itemName":"NY Rajasthan Backpacking"},{"itemCode":["ny-rishikesh-chopta-tungnath"],"itemName":"NY Rishikesh Chopta Tungnath"},{"itemCode":["ny-shimla-manali"],"itemName":"Ny Shimla Manali"},{"itemCode":["ny-winter-spiti"],"itemName":"NY Winter Spiti"},{"itemCode":["pattaya-bangkok-5n6d"],"itemName":"Pattaya Bangkok  5N6D"},{"itemCode":["pavagadh-trek"],"itemName":"Pavagadh Trek"},{"itemCode":["peb-fort-trek"],"itemName":"Peb Fort Trek"},{"itemCode":["phuket-explorer-6n7d"],"itemName":"Phuket explorer 6N7D"},{"itemCode":["phuket-krabi-5n6d"],"itemName":"Phuket Krabi 5N6D"},{"itemCode":["phuket-krabi-honeymoon-trip"],"itemName":"Phuket Krabi Honeymoon Trip"},{"itemCode":["pin-bhaba-pass"],"itemName":"Pin Bhaba Pass"},{"itemCode":["prashar-rewalsar-lake-3d2n"],"itemName":"Prashar & Rewalsar Lake - 3D2N"},{"itemCode":["prashar-lake-bir-billing"],"itemName":"Prashar Lake & Bir Billing"},{"itemCode":["prashar-lake-rewalsar"],"itemName":"Prashar Lake & Rewalsar"},{"itemCode":["prashar-lake-camping"],"itemName":"Prashar Lake Camping"},{"itemCode":["pushkar-holi-special"],"itemName":"Pushkar Holi Special"},{"itemCode":["rajasthan-backpacking-pushkar-udaipur-bikaner"],"itemName":"Rajasthan Backpacking - Pushkar-Udaipur-Bikaner"},{"itemCode":["rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer"],"itemName":"Rajasthan Backpacking From Delhi - Udaipur-Jodhpur-Jaisalmer"},{"itemCode":["rajasthan-backpacking-udaipur-jodhpur-jaisalmer"],"itemName":"Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer"},{"itemCode":["ratanmahal-trek-from-vadodara"],"itemName":"Ratanmahal Trek From Vadodara"},{"itemCode":["rishikesh-camping-rafting"],"itemName":"Rishikesh Camping & Rafting"},{"itemCode":["rishikesh-chopta-tungnath"],"itemName":"Rishikesh Chopta Tungnath"},{"itemCode":["rishikesh-rafting-trip"],"itemName":"Rishikesh Rafting Trip"},{"itemCode":["road-trip-to-jibhi-jalori-pass"],"itemName":"Road Trip to Jibhi & Jalori Pass"},{"itemCode":["rupin-pass-trek"],"itemName":"Rupin Pass Trek"},{"itemCode":["saputara-group-trip"],"itemName":"Saputara Group Trip"},{"itemCode":["sar-pass-trek"],"itemName":"Sar Pass Trek"},{"itemCode":["shali-tibba-trek"],"itemName":"Shali Tibba Trek"},{"itemCode":["shangarh-sainj-valley"],"itemName":"Shangarh & Sainj Valley"},{"itemCode":["sheshnag-lake-trek"],"itemName":"Sheshnag Lake Trek"},{"itemCode":["shimla-3-days-2-nights"],"itemName":"Shimla 3 Days 2 Nights"},{"itemCode":["shimla-kasol-manali-6-days-5-nights"],"itemName":"Shimla Kasol Manali 6 Days 5 Nights"},{"itemCode":["shimla-manali-4-days-3-nights"],"itemName":"Shimla Manali 4 Days 3 Nights"},{"itemCode":["shimla-manali-5-days-4-nights"],"itemName":"Shimla Manali 5 Days 4 Nights"},{"itemCode":["shimla-manali-dalhousie-8-days-7-nights"],"itemName":"Shimla Manali Dalhousie 8 Days 7 Nights"},{"itemCode":["shimla-manali-dharamshala"],"itemName":"Shimla Manali Dharamshala"},{"itemCode":["shimla-manali-kasol-5-days-4-nights"],"itemName":"Shimla Manali Kasol 5 Days 4 Nights"},{"itemCode":["shimla-manali-mcleod-dalhousie-amritsar"],"itemName":"Shimla Manali McLeod Dalhousie Amritsar"},{"itemCode":["snowboarding-course-in-gulmarg"],"itemName":"Snowboarding Course in Gulmarg"},{"itemCode":["southern-vietnam-honeymoon-special"],"itemName":"Southern Vietnam - Honeymoon Special"},{"itemCode":["spiti-valley-biking-edition"],"itemName":"Spiti Valley - Biking Edition"},{"itemCode":["spiti-valley-jibhi-edition"],"itemName":"Spiti Valley - Jibhi Edition"},{"itemCode":["spiti-valley-circuit-trip"],"itemName":"Spiti Valley Circuit Trip"},{"itemCode":["spiti-valley-circuit-trip-from-chandigarh"],"itemName":"Spiti Valley Circuit Trip From Chandigarh"},{"itemCode":["spiti-valley-circuit-trip-manali-to-shimla"],"itemName":"Spiti Valley Circuit Trip Manali to Shimla"},{"itemCode":["spiti-valley-circuit-trip-with-manali"],"itemName":"Spiti Valley Circuit Trip with Manali"},{"itemCode":["spiti-valley-explorer-edition"],"itemName":"Spiti Valley Explorer Edition"},{"itemCode":["spiti-valley-trip-from-chandigarh-manali-edition"],"itemName":"Spiti Valley Trip From Chandigarh - Manali Edition"},{"itemCode":["spiti-valley-manali-edition"],"itemName":"Spiti Valley- Manali Edition"},{"itemCode":["srinagar-leh-manali"],"itemName":"Srinagar Leh Manali"},{"itemCode":["tarsar-marsar-trek"],"itemName":"Tarsar Marsar Trek"},{"itemCode":["tawang-backpacking"],"itemName":"Tawang Backpacking"},{"itemCode":["thailand-6d5n"],"itemName":"Thailand - 6D5N"},{"itemCode":["thailand-bangkok-pattaya-4n5d"],"itemName":"Thailand (Bangkok & Pattaya) 4N5D"},{"itemCode":["thailand-phuket-krabi-phi-phi-5n6d"],"itemName":"Thailand (Phuket Krabi Phi Phi) 5N6D"},{"itemCode":["thailand-phuket-krabi-phi-phi-6n7d"],"itemName":"Thailand (Phuket Krabi Phi Phi) 6N7D"},{"itemCode":["thailand-phuket-phi-phi-island-4n5d"],"itemName":"Thailand (Phuket, Phi Phi Island) 4N5D"},{"itemCode":["thailand-9d8n"],"itemName":"Thailand 9D8N"},{"itemCode":["thailand-explorer-bangkok-pattaya-krabi-phuket"],"itemName":"Thailand Explorer - Bangkok Pattaya Krabi Phuket"},{"itemCode":["thailand-full-moon-party"],"itemName":"Thailand Full Moon Party"},{"itemCode":["tirthan-valley-prashar-lake"],"itemName":"Tirthan Valley & Prashar Lake"},{"itemCode":["tungnath-kedarnath-5d4n"],"itemName":"Tungnath Kedarnath 5D4N"},{"itemCode":["turkey-9d8n"],"itemName":"Turkey 9D8N"},{"itemCode":["udaipur"],"itemName":"Udaipur"},{"itemCode":["udaipur-kumbhalgarh"],"itemName":"Udaipur & Kumbhalgarh"},{"itemCode":["udaipur-mount-abu-trip-from-delhi"],"itemName":"Udaipur & Mount Abu Trip From Delhi"},{"itemCode":["uttarakhand-backpacking-chopta-edition"],"itemName":"Uttarakhand Backpacking - Chopta Edition"},{"itemCode":["uttarakhand-backpacking-10d9n"],"itemName":"Uttarakhand Backpacking 10D9N"},{"itemCode":["uttarakhand-backpacking-7d6n"],"itemName":"Uttarakhand Backpacking 7D6N"},{"itemCode":["valley-of-flowers-trek"],"itemName":"Valley of Flowers Trek"},{"itemCode":["vietnam-danang-ho-chi-minh-6d5n"],"itemName":"Vietnam - DaNang Ho Chi Minh 6D5N"},{"itemCode":["vietnam-6n7d"],"itemName":"Vietnam 6N7D"},{"itemCode":["vietnam-9n10d"],"itemName":"Vietnam 9N10D"},{"itemCode":["vietnam-backpacking"],"itemName":"Vietnam Backpacking"},{"itemCode":["vietnam-explorer-8d7n"],"itemName":"Vietnam Explorer 8D7N"},{"itemCode":["vietnam-explorer-honeymoon-edition"],"itemName":"Vietnam Explorer- Honeymoon Edition"},{"itemCode":["vietnam-honeymoon-trip-hanoi-da-nang"],"itemName":"Vietnam Honeymoon Trip - Hanoi & Da Nang"},{"itemCode":["vietnam-north"],"itemName":"Vietnam North"},{"itemCode":["vietnam-signature-10d9n"],"itemName":"Vietnam Signature - 10D9N"},{"itemCode":["vietnam-south"],"itemName":"Vietnam South"},{"itemCode":["vietnam-trip-with-flights"],"itemName":"Vietnam Trip with Flights"},{"itemCode":["vietnam-danang-hanoi-6d5n"],"itemName":"Vietnam- Danang Hanoi 6D5N"},{"itemCode":["winter-kalpa-chitkul"],"itemName":"Winter Kalpa Chitkul"},{"itemCode":["winter-leh-ladakh"],"itemName":"Winter Leh Ladakh"},{"itemCode":["winter-spiti"],"itemName":"Winter Spiti"},{"itemCode":["xmas-himachal-backpacking"],"itemName":"Xmas Himachal Backpacking"},{"itemCode":["xmas-jaisalmer-longewala"],"itemName":"Xmas Jaisalmer & Longewala"},{"itemCode":["yulla-kanda-trek"],"itemName":"Yulla Kanda Trek"}]'
                />
                <div className="d-flex mt-5 flex-wrap justify-content-center hero-section-item-wrapper">
                  <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/solo-travel-friendly.png"
                      alt="Solo-Travel Friendly"
                    />
                    <h4>Solo-Travel Friendly</h4>
                  </div>
                  <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/group-trips.png"
                      alt="Group Trips"
                    />
                    <h4>Group Trips</h4>
                  </div>
                  <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/himalayan-treks.png"
                      alt="Himalayan Treks"
                    />
                    <h4>Himalayan Treks</h4>
                  </div>
                  <div className="d-flex mx-2 hero-section-items mb-4 flex-column align-items-center">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/travel-meetups.png"
                      alt="Travel Meetups"
                    />
                    <h4>Travel Meetups</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TRIP CATEGORIES  */}
          <section className="categories">
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                <h2 className="mb-1">
                  Trip <span className="theme">Categories</span>
                </h2>
              </div>
              <div className="trip-categories-slider">
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/weekend-trips"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/15267120230306143345.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Weekend Trips</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/honeymoon-packages"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/11725720200405174358.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Honeymoon Packages</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/backpacking-trips"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/39798620200405174840.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Backpacking Trips</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/camping-trip"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/30756620200405174916.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Camping Trip</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/international-trips"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/1819020200405174929.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">International Trips</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/trekking"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/21029520200405174947.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Trekking</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/corporate-trips"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/13110120200405175000.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Corporate Trips</p>
                    </a>
                  </div>
                </div>
                <div className="col-auto" style={{ textAlign: "center" }}>
                  <div className="text-center who-are-we-steps mx-auto">
                    <a
                      className="moveto"
                      href="https://go4explore.com/trips-category/road-trips"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="w-100"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/29976920200405175031.png"
                        alt="trekking"
                      />
                      <p className="fs-2md fw-bold mt-3">Road Trips</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="trending pb-0 pt-6"
            style={{
              backgroundImage:
                "url(https://d2qa7a8q0vuocm.cloudfront.net/images/shape-1.png)",
              backgroundPosition: "center",
            }}
          >
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                <h2 className="mb-1">
                  Best Trips Across <span className="theme">The Globe</span>
                </h2>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <a href="https://go4explore.com/trip/vietnam">
                    <div className="trend-item1 mb-4">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Vietnam.png"
                          alt="image"
                        />
                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                          <div className="trend-content-title">
                            <h3 className="mb-0 white">Vietnam</h3>
                          </div>
                        </div>
                        <div className="color-overlay" />
                      </div>
                    </div>
                  </a>
                  <a href="https://go4explore.com/trip/bali">
                    <div className="trend-item1 mb-4">
                      <div className="trend-image position-relative rounded">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Bali.png"
                          alt="image"
                        />
                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                          <div className="trend-content-title">
                            <h3 className="mb-0 white">Bali</h3>
                          </div>
                        </div>
                        <div className="color-overlay" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/dubai">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Dubai.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Dubai</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/kashmir">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Kashmir.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Kashmir</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/kerala">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Kerala.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Kerala</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/singapore">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Singapore.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Singapore</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                      <a href="https://go4explore.com/trip/thailand">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Thailand.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Thailand</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/himachal-pradesh-tour-packages">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Himachal-Pradesh.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Himachal Pradesh</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/sri-lanka">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Sri-Lanka.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Sri Lanka</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/maldives">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Maldives.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Maldives</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/rajasthan">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Rajasthan.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Rajasthan</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/azerbaijan">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/azerbaijan.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Azerbaijan</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 mb-4">
                      <a href="https://go4explore.com/trip/turkey">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Turkey.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Turkey</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
                      <a href="https://go4explore.com/trip/georgia">
                        <div className="trend-item1">
                          <div className="trend-image position-relative rounded">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/Georgia.png"
                              alt="image"
                            />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                              <div className="trend-content-title">
                                <h3 className="mb-0 white">Georgia</h3>
                              </div>
                            </div>
                            <div className="color-overlay" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* UPCOMING TRIPS  */}
          <section className="upcoming">
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                {/* <h4 class="mb-1 theme1">Top Offers</h4> */}
                <h2 className="mb-1">
                  Upcoming <span className="theme">Trips</span> Packages
                </h2>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
    </p> */}
              </div>
              <div className="row justify-content-center">
                <div className="upcoming-trips-slider">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/kazakhstan-5d4n"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/10635320231113122348.png"
                            alt="upcoming-trips"
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />5 Days 4
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/kazakhstan-5d4n" />
                          <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                            Kazakhstan- 5D4N
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">₹45000 | Per person</p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/39972720231024132811.png"
                            alt="upcoming-trips"
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer" />
                          <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                            Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <s>₹ 21499</s> ₹19999 | Per person
                            </p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/vietnam-signature-10d9n"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/396320230630111014.png"
                            alt="upcoming-trips"
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />
                                10 Days 9 Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/vietnam-signature-10d9n" />
                          <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                            Vietnam Signature - 10D9N
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <s>₹ 75000</s> ₹70000 | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/36351120230330170705.png"
                            alt="upcoming-trips"
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5500 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk" />
                          <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                            Leh Ladakh with Turtuk
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <s>₹ 27000</s> ₹21500 | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/meghalaya-backpacking"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/meghalaya-backpacking">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/33104120220720040415.png"
                            alt="upcoming-trips"
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/meghalaya-backpacking">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/meghalaya-backpacking" />
                          <a href="https://go4explore.com/trips/meghalaya-backpacking">
                            Meghalaya Backpacking
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">₹21000 | Per person</p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/15700420230330171626.png"
                            alt="upcoming-trips"
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹7000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />9 Days 8
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip" />
                          <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                            Manali Leh Backpacking Bike Trip
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <s>₹ 37000</s> ₹30000 | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/winter-spiti"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/winter-spiti">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/20380220200228132700.png"
                            alt="upcoming-trips"
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/winter-spiti">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/winter-spiti" />
                          <a href="https://go4explore.com/trips/winter-spiti">
                            Winter Spiti
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">₹17999 | Per person</p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/24503320230702175334.png"
                            alt="upcoming-trips"
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />3 Days 2
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal" />
                          <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                            Chopta-Tungnath-Deoriatal
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <s>₹ 6999</s> ₹6499 | Per person
                            </p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TRAVEL GOSSIPS */}
          <section className="py-5 my-lg-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                  <div className="travel-gossips-slider">
                    <a href="https://go4explore.com/trip/kazakhstan-tour-packages">
                      <Image
                        width={100}
                        height={100}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/23484720240316105741.png"
                        alt="travel-gossips"
                      />
                    </a>
                    <a href="https://go4explore.com/trip/vietnam">
                      <Image
                        width={100}
                        height={100}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/10613820240316105652.png"
                        alt="travel-gossips"
                      />
                    </a>
                    <a href="https://go4explore.com/trip/thailand">
                      <Image
                        width={100}
                        height={100}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/12127320240316105633.png"
                        alt="travel-gossips"
                      />
                    </a>
                    <a href="https://go4explore.com/trip/bali">
                      <Image
                        width={100}
                        height={100}
                        className="img-fluid rounded"
                        src="https://d2qa7a8q0vuocm.cloudfront.net/images/36727320240316105558.png"
                        alt="travel-gossips"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* BEST SELLERS  */}
          <section className="best-saller">
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                <h2 className="mb-1">
                  Explore <span className="theme">Top</span> Destinations
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="upcoming-trips-slider">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/kazakhstan-5d4n"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/10635320231113122348.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />5 Days 4
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/kazakhstan-5d4n" />
                          <a href="https://go4explore.com/trips/kazakhstan-5d4n">
                            Kazakhstan- 5D4N
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹45000</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/39972720231024132811.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer" />
                          <a href="https://go4explore.com/trips/rajasthan-backpacking-udaipur-jodhpur-jaisalmer">
                            Rajasthan Backpacking- Udaipur Jodhpur Jaisalmer
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹21499</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/vietnam-signature-10d9n"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/396320230630111014.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />
                                10 Days 9 Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/vietnam-signature-10d9n" />
                          <a href="https://go4explore.com/trips/vietnam-signature-10d9n">
                            Vietnam Signature - 10D9N
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹75000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹70000
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/36351120230330170705.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹5500 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk" />
                          <a href="https://go4explore.com/trips/leh-ladakh-with-turtuk">
                            Leh Ladakh with Turtuk
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹27000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹21500
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/meghalaya-backpacking"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/meghalaya-backpacking">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/33104120220720040415.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/meghalaya-backpacking">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />6 Days 5
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/meghalaya-backpacking" />
                          <a href="https://go4explore.com/trips/meghalaya-backpacking">
                            Meghalaya Backpacking
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹21000</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/15700420230330171626.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="ribbon ribbon-top-left">
                            <span className="fw-bold">₹7000 OFF</span>
                          </div>
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />9 Days 8
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip" />
                          <a href="https://go4explore.com/trips/manali-leh-backpacking-bike-trip">
                            Manali Leh Backpacking Bike Trip
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="line-through">₹37000</span>
                              <span className="theme fw-bold fs-5">
                                {" "}
                                ₹30000
                              </span>{" "}
                              | | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/winter-spiti"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/winter-spiti">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/20380220200228132700.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/winter-spiti">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />7 Days 6
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/winter-spiti" />
                          <a href="https://go4explore.com/trips/winter-spiti">
                            Winter Spiti
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹17999</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal"></a>
                    <div className="trend-item box-shadow rounded">
                      <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                        <div className="trend-image position-relative">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/24503320230702175334.png"
                            alt="upcoming-trips"
                            style={{ width: 264, height: 148 }}
                          />
                          <div className="color-overlay" />
                        </div>
                      </a>
                      <div className="trend-content position-relative">
                        <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                          <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                              <span className="">
                                <i className="bi bi-clock-fill" />3 Days 2
                                Nights
                              </span>
                            </div>
                          </div>
                        </a>
                        <h3 className="mb-1">
                          <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal" />
                          <a href="https://go4explore.com/trips/chopta-tungnath-deoriatal">
                            Chopta-Tungnath-Deoriatal
                          </a>
                        </h3>
                        <p className=" border-b pb-2 mb-1" />
                        <div className="entry-meta">
                          <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                              <span className="theme fw-bold fs-5">₹6999</span>{" "}
                              | Per person
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* REQUEST CALL BACK  */}
          <section className="query">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-12 col-lg-5">
                  <div className="query-content text-lg-start text-center">
                    <h4 className="theme mb-0">Have A Query?</h4>
                    <h2>Talk To Our Travel Experts </h2>
                    {/* <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore</p> */}
                    <div className="book-form">
                      <div className="row d-flex align-items-center justify-content-between">
                        <form action="#">
                          <div className="col-lg-12 mb-2">
                            <div className="form-group">
                              <div className="input-box">
                                <input
                                  className="nice-select"
                                  type="text"
                                  // onchange="callback({ name: 'name','value':$(this).val() }) "
                                  placeholder="Full Name"
                                  id="name"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-2">
                            <div className="form-group">
                              <div className="input-box">
                                <input
                                  className="nice-select"
                                  type="email"
                                  // onchange="callback({ name: 'email','value':$(this).val() }) "
                                  // pattern=".*@.*\.com"
                                  // oninvalid="setCustomValidity('Please enter a valid email address ')"
                                  // oninput="setCustomValidity('')"
                                  placeholder="Email-ID"
                                  id="email"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mb-2">
                            <div className="form-group">
                              <div className="input-box">
                                <input
                                  className="nice-select"
                                  type="text"
                                  // onchange="callback({ name: 'mobile','value':$(this).val() }) "
                                  placeholder="Mobile Number"
                                  id="phone"
                                  pattern="[0-9]{10}"
                                  title="Please enter a 10-digit phone number"
                                  // oninvalid="setCustomValidity('Please enter a valid phone number ')"
                                  // oninput="setCustomValidity('')"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-0 text-center">
                              <button
                                className="nir-btn w-100"
                                type="submit"
                                id="submit"
                              >
                                <i className="bi bi-chat-dots-fill" /> &nbsp;
                                REQUEST CALL BACK
                              </button>
                              <button
                                className="nir-btn w-100"
                                type="button"
                                id="wait"
                                style={{ display: "none" }}
                              >
                                Please Wait...
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="query-image">
                    <Image
                      width={100}
                      height={100}
                      src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/travel-query.png"
                      alt="request-call-back"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TRAVEL  VIDEOS */}
          <section className="videos-gallery ">
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                {/* <h4 class="mb-1 theme1">Our Gallery</h4> */}
                <h2 className="mb-1">
                  <span className="theme">Travel</span> Videos
                </h2>
              </div>
              <div className="row justify-content-center">
                {/*  TRAVEL VIDEOS  */}
                <div className="travel-videos-slider">
                  {/*  TRAVEL ITEM  */}
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 01.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn1">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 02.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn2">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 03.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn3">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 04.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn4">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 05.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn5">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 06.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn6">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image" id="btn7">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 07.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gallery-item mb-4 rounded overflow-hidden">
                      <div className="gallery-image">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/video thumb 08.jpg"
                          alt="image"
                        />
                        <div className="popup-btn-box popup-btn" id="btn8">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* PLAN YOUR TRIP  */}
          <section className="our-story-bg-section">
            <div className="container">
              <div className="section-title mb-6 mx-auto text-center">
                <h2 className="mb-1 white">Plan Your Trip</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 m-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    className="img-fluid"
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/plan-your-trip-asset.png"
                    alt="plan your trip"
                  />
                  <p className="text-center mt-5 fs-2md text-white">
                    Call us or drop Hi on Whatsapp at{" "}
                    <i className="bi bi-whatsapp" />{" "}
                    <a href="tel:8700923377" className="text-white">
                      +91 8700923377
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIALS */}
          <section className="testimonails">
            <div className="container">
              <div className="section-title mb-6 text-center w-75 mx-auto">
                <h2 className="mb-1">Testimonials</h2>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-9 col-xl-8">
                  <div className="testimonials-slider">
                    <div>
                      <div className="gallery-item mb-4 rounded overflow-hidden">
                        <div className="gallery-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials.jpg"
                            alt="image"
                          />
                          <div
                            className="popup-btn-box popup-btn"
                            id="btn9"
                            // onclick="loadVideo('oYRoeD47aEI','09')"
                          >
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="gallery-item mb-4 rounded overflow-hidden">
                        <div className="gallery-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/video/testimonials2.jpg"
                            alt="image"
                          />
                          <div className="popup-btn-box popup-btn" id="btn10">
                            <Image
                              width={100}
                              height={100}
                              src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/trip-iti/play-button asset1.png"
                              alt="image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* TESTIMONIALS */}
          {/* BLOGS  */}
          <section className="blog">
            <div className="container">
              <div className="section-title mb-6 w-75 mx-auto text-center">
                <h2 className="mb-1">
                  Recent <span className="theme">Articles &amp; Posts</span>
                </h2>
              </div>
              <div className="row justify-content-center">
                <div className="blog-slider">
                  <div className="col-lg-3">
                    <a
                      href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                      target="_blank"
                    ></a>
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                      <a
                        href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                        target="_blank"
                      >
                        <div className="trend-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog1.jpg"
                            alt="image"
                          />
                        </div>
                      </a>
                      <div className="trend-content-main">
                        <a
                          href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                          target="_blank"
                        ></a>
                        <div className="trend-content">
                          <a
                            href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                            target="_blank"
                          ></a>
                          <h5 className="mb-0">
                            <a
                              href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                              target="_blank"
                            />
                            <a
                              href="https://go4explore.com/blogs/offbeat-beaches-in-goa/"
                              target="_blank"
                            >
                              6 offbeat beaches you should explore in Goa
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <a
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    ></a>
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                      <a
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      >
                        <div className="trend-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog2.jpg"
                            alt="image"
                          />
                        </div>
                      </a>
                      <div className="trend-content-main">
                        <a
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        ></a>
                        <div className="trend-content">
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          ></a>
                          <h5 className="mb-0">
                            <a
                              href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                              target="_blank"
                            />
                            <a
                              href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                              target="_blank"
                            >
                              How to reach Chopta by public transport?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <a
                      href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                      target="_blank"
                    ></a>
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                      <a
                        href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                        target="_blank"
                      >
                        <div className="trend-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog3.jpg"
                            alt="image"
                          />
                        </div>
                      </a>
                      <div className="trend-content-main">
                        <a
                          href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                          target="_blank"
                        ></a>
                        <div className="trend-content">
                          <a
                            href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                            target="_blank"
                          ></a>
                          <h5 className="mb-0">
                            <a
                              href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                              target="_blank"
                            />
                            <a
                              href="https://go4explore.com/blogs/reach-chopta-by-public-transport/"
                              target="_blank"
                            >
                              Top 20 places to visit in Gujarat
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <a
                      href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                      target="_blank"
                    ></a>
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                      <a
                        href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                        target="_blank"
                      >
                        <div className="trend-image">
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/blog4.jpg"
                            alt="image"
                          />
                        </div>
                      </a>
                      <div className="trend-content-main">
                        <a
                          href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                          target="_blank"
                        ></a>
                        <div className="trend-content">
                          <a
                            href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                            target="_blank"
                          ></a>
                          <h5 className="mb-0">
                            <a
                              href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                              target="_blank"
                            />
                            <a
                              href="https://go4explore.com/blogs/how-to-reach-kedarnath-temple/"
                              target="_blank"
                            >
                              How to reach Kedarnath Temple from Delhi?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* RECOGNIATIONS & COLLABORATONS  */}
          <section>
            <div className="section-title mb-6 w-75 mx-auto text-center">
              {/* <h4 class="mb-1 theme1">Our Partners</h4> */}
              <h2 className="mb-1">
                Recognitions &amp; <span className="theme">Collaborations</span>
              </h2>
            </div>
            <div className="container mb-lg-5">
              <div className="row justify-content-between align-items-center recognitions-collaborations-first-row">
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/msme 1.jpg"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/2560px-Decathlon_Logo.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/India_04_1660.jpg"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/sterling-logo.webp"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/startup india logo.png"
                    alt="Recognitions"
                  />
                </div>
              </div>
              <div className="my-5 row justify-content-between align-items-center recognitions-collaborations-second-row">
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/mp-tourism-logo.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/gujarat-tourism-logo-FAA.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/TheHosteller_Logo1.webp"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/gostops-footer-logo.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/j_k tourims.jpg"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/manipur tourism logo.png"
                    alt="Recognitions"
                  />
                </div>
              </div>
              <div className="row justify-content-between align-items-center recognitions-collaborations-third-row">
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/DESKER-Logo-H PNG_edited.webp"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/garage_society_logo.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/228-2280491_nepal-tourism-board-hd-png-download.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/logo whoopers hostel.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/Delhi_Tourism 67.png"
                    alt="Recognitions"
                  />
                </div>
                <div className="col-6 col-sm-auto text-center">
                  <Image
                    width={100}
                    height={100}
                    src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/homepage/yourstory logo.png"
                    alt="Recognitions"
                  />
                </div>
              </div>
            </div>
          </section>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          {/* JQUEY  */}
          {/* SLICK SLIDER  */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n    #bonanzaModal {\n        display: none;\n        position: absolute;\n        width: 100%;\n        z-index: 9999;\n        top: 0;\n        height: 100vh;\n        background: #082a43b0;\n        backdrop-filter: blur(4px);\n        padding-top: 80px;\n    }\n\n    .signctn {\n        width: 100%;\n        background: #ffffff;\n        padding: 10px 10px;\n        max-width: 350px;\n        border-radius: 6px;\n        position: absolute;\n        margin: 0 auto;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        border: 4px solid #fff;\n        text-align: center;\n    }\n\n    .signctn .nir-btn {\n        position: relative;\n        cursor: pointer;\n        font-size: 18px;\n        text-align: center;\n        padding: 12px 10px;\n        transition: all ease-in-out 0.5s;\n        background: linear-gradient(90deg, #004aad, #1c7dff);\n        color: #fff;\n        display: inline-block;\n        border-radius: 10px;\n        border: none;\n        box-shadow: 0px 0px 0px 4px rgba(255, 255, 255, 0.1);\n        overflow: hidden;\n        font-weight: 600;\n        text-transform: uppercase;\n        margin-left: 2px;\n    }\n\n    .signctn h2 {\n        font-weight: 700;\n        font-size: 21px;\n        margin: 17px 0;\n    }\n\n    .signctn h2 span {\n        color: #2856b1;\n    }\n\n\n\n    #closeModal-inquiry {\n        position: absolute;\n        top: 0px;\n        right: 0px;\n        cursor: pointer;\n    }\n\n    #closeModal-inquiry img {\n        width: 33px;\n    }\n\n    .signctn input[type="text"],\n    .signctn input[type="email"],\n    .signctn input[type="number"],\n    .signctn input[type="search"],\n    .signctn input[type="password"],\n    .signctn input[type="tel"],\n    .signctn input[type="date"],\n    .signctn input[type="time"],\n    .signctn textarea,\n    .signctn select {\n        font-size: 15px;\n        font-weight: 500;\n        background-color: #fff;\n        border: 1px solid #17233e;\n        border-radius: 100px;\n        padding: 12px 20px;\n        color: #000;\n        margin-bottom: 0;\n        height: 50px;\n        box-shadow: none;\n        width: 100%;\n    }\n\n    .signctn ::placeholder {\n        color: #17233e;\n    }\n',
            }}
          />
          <div className="mobile-fixed">
            <div className="mobile-wrapper">
              <a
                href="tel:8076602635"
                target="_blank"
                className="box call"
                title="Enqire now"
              >
                <i className="bi bi-telephone" /> &nbsp; Call
              </a>
              <a
                id="bttn_inquiry"
                className="box send_inquiry"
                title="Enqire now"
              >
                <i className="bi bi-chat-dots-fill" /> &nbsp; Send Query
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918076602635"
                target="_blank"
                className="box Whatsapp_inquiry"
                title="Enqire now"
              >
                <i className="bi bi-whatsapp" /> &nbsp; whatsapp
              </a>
            </div>
          </div>
          <div className="video-popup" id="inquiry-bg">
            <div className="popup-bg" />
            <div className="signctn">
              <Image
                width={100}
                height={100}
                src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/enqire-bg.png"
                alt=""
                className="rounded-md"
              />
              <div className="query-content text-lg-start text-center">
                <h2>
                  Talk To Our <span>Travel Experts</span>{" "}
                </h2>
                <div className="book-form">
                  <div className="row d-flex align-items-center justify-content-between">
                    <form action="#">
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="text"
                              placeholder="Name *"
                              name="name"
                              id="name_1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="text"
                              placeholder="Mobile Number *"
                              name="phone"
                              id="phone_1"
                            />
                            <input
                              type="hidden"
                              name="slug"
                              defaultValue="home"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              className="nice-select"
                              type="email"
                              placeholder="Email-ID *"
                              name="email"
                              id="email_1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mb-2">
                        <p className="text-left mb-0 text-success">
                          <i className="bi bi-check-circle" /> We Assure the
                          privacy of your contact data
                        </p>
                        <p className="text-left text-danger">
                          <i className="bi bi-x-circle" /> No annoying spam
                          calls
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0 text-center">
                          <button
                            className="nir-btn w-100"
                            type="submit"
                            id="submit_1"
                          >
                            <i className="bi bi-chat-dots-fill" /> &nbsp; Send
                            Me Details
                          </button>
                          <button
                            className="nir-btn w-100"
                            type="button"
                            id="wait_1"
                            style={{ display: "none" }}
                          >
                            Please Wait...
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="" id="closeModal-inquiry">
                <Image
                  width={100}
                  height={100}
                  src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/close.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <footer className="pt-20 pb-4">
            <div className="section-shape top-0" />
            <div className="insta-main pb-10">
              <div className="container">
                <div className="insta-inner">
                  <div className="follow-button">
                    <a
                      href="https://www.instagram.com/go4explore.community"
                      target="_blank"
                    >
                      <h5 className="m-0 rounded">
                        <i className="fab fa-instagram" /> Follow on Instagram
                      </h5>
                    </a>
                  </div>
                  <div className="row instagram-slider">
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/9611920230309080512.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/13180820230309080504.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/35107020230309080455.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/7548520230309080444.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/32709120230309080435.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/13828220230309080425.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/11079920230309080416.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/26764320230309080403.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="insta-image rounded">
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={100}
                            src="https://d2qa7a8q0vuocm.cloudfront.net/images/1084820230309075911.png"
                            alt="insta"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-upper pb-4">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
                    <div className="footer-about">
                      <Image
                        width={100}
                        height={100}
                        src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/go4explore-logo-white.png"
                        alt="image"
                      />
                      <p className="mt-3 mb-3 white">
                        Go4Explore is a community of avid travellers badly
                        bitten by the travel bug who curate fun-filled community
                        trips as per your interest and comfort.
                      </p>
                      <p className="mt-3 mb-3 white">
                        Road trips - We organize short and long weekend road
                        trips with like-minded people.
                      </p>
                      <p className="mt-3 mb-3 white">
                        Himalayan treks - Walk on trails, camp under million
                        stars, chill beside warm bonfire and gather memories on
                        our well curated treks.
                      </p>
                      <p className="mt-3 mb-3 white">
                        Travel meets - We love meeting new people and share
                        mindblowing travel stories. Travel meetups packed with
                        fun and knowledge sessions by skilled-travellers..
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-xs-6 col-sm-12 mb-4">
                    <div className="footer-links">
                      <h3 className="white">Quick link</h3>
                      <ul>
                        <li>
                          <a href="https://go4explore.com/aboutus">About Us</a>
                        </li>
                        {/* <li>Travel Gossips</li>
    <li>
      <a href="#">Blogs</a>
    </li>
 <li>Collaborations</li> */}
                        <li>
                          <a href="https://go4explore.com/stories">Stories</a>
                        </li>
                        <li>
                          <a href="https://go4explore.com/forum">Forums</a>
                        </li>
                        <li>
                          <a href="https://go4explore.com/careers">Careers</a>
                        </li>
                        <li>
                          <a
                            href="https://go4explore.com/get-in-touch"
                            className="movetofooter"
                          >
                            Get In Touch
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://api.whatsapp.com/send?phone=917015750288"
                            target="_blank"
                          >
                            Chat On WhatsApp
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-xs-6 col-sm-12 mb-4">
                    <div className="footer-links">
                      <h3 className="white">Other Links</h3>
                      <ul>
                        <li>
                          <a href="https://go4explore.com/vendor-register">
                            Partner With Us
                          </a>
                        </li>
                        <li>
                          <a href="https://go4explore.com/Cancellation-and-Refund-Policy">
                            Cancellation Policy
                          </a>
                        </li>
                        <li>
                          <a href="https://go4explore.com/terms-&-condition">
                            Terms and Conditions
                          </a>
                        </li>
                        <li>
                          <a href="https://go4explore.com/privacy-policy">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="footer-links">
                      <h3 className="white">Stay Updated</h3>
                      <div className="newsletter-form ">
                        <p className="mb-3">
                          Get all the best deals, handcrafted itineraries,
                          exclusive upcoming trip packages &amp; curated travel
                          content to fuel your wanderlust straight into your
                          inbox.
                        </p>
                        <form
                          action="#"
                          method="get"
                          acceptCharset="utf-8"
                          className="border-0 d-flex align-items-center"
                        >
                          <input
                            type="text"
                            placeholder="Email Address"
                            id="suscriberemail"
                          />
                          <button
                            className="nir-btn ms-2"
                            id="submitemail"
                            type="button"
                          >
                            Subscribe
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-payment">
              <div className="container">
                <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
                  <div className="col-lg-12 footer-payment-nav mb-4">
                    <ul className="">
                      <li className="me-2">
                        All Payments Secured By 128 Bit SSL Encryption :
                      </li>
                      <li className="me-2">
                        <Image
                          width={100}
                          height={100}
                          src="https://d2qa7a8q0vuocm.cloudfront.net/frontend/assets/img/payment-mode.png"
                          alt="image"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container">
                <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
                  <div className="copyright-text">
                    <p className="m-0 white">
                      {" "}
                      © 2017-2023 Wander N Explore Pvt. Ltd. All Rights
                      Reserved.
                    </p>
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a
                          href="https://www.instagram.com/go4explore.community"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                        >
                          <i className="bi bi-instagram" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/go4explore"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                        >
                          <i className="bi bi-linkedin" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/go4explore"
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                        >
                          <i className="bi bi-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="particles-js" />
          </footer>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <div className="video-popup">
            <div className="popup-bg" />
            <div className="popup-content" />
          </div>
          <input type="hidden" id="queryParams" defaultValue="" />
      </div>
    </>
  );
}
