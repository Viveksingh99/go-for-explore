import BestTrips from "@/components/Best-Trips";
import ExploreTop from "@/components/Explore-Top-Destinations";
import Hero from "@/components/HeroSection";
import PlanYourTrip from "@/components/Plan-Your-Trip";
import RecentArticlesPosts from "@/components/Recent-Articles-Posts";
import RecognitionsCollaborations from "@/components/Recognitions-Collaborations";
import RequestCall from "@/components/Request-Call-Back";
import Testimonials from "@/components/Testimonials";
import TravelVideos from "@/components/Travel-Videos";
import Trip from "@/components/Trip-Categories";
import TripSwiper from "@/components/Trip-Swiper";
import UpcomingTrips from "@/components/Upcoming-Trips";

export default function Home() {
  return (
    <>
      <div>
        {/*---- HERO SECTION ----*/}
        <Hero />
        {/*---- HERO SECTION ----*/}

        {/* TRIP CATEGORIES  */}
        <Trip />
        {/* TRIP CATEGORIES  */}

        {/* Best Trips Across The Globe */}
        <BestTrips />
        {/* Best Trips Across The Globe */}

        {/* UPCOMING TRIPS  */}
        <UpcomingTrips />
        {/* UPCOMING TRIPS  */}

        {/* TRAVEL Swiper */}
        <TripSwiper />
        {/* TRAVEL Swiper */}

        {/* Explore Top Destinations  */}
        <ExploreTop />
        {/* Explore Top Destinations  */}

        {/* REQUEST CALL BACK  */}
        <RequestCall />
        {/* REQUEST CALL BACK  */}

        {/* TRAVEL  VIDEOS */}
        <TravelVideos />
        {/* TRAVEL  VIDEOS */}

        {/* PLAN YOUR TRIP  */}
        <PlanYourTrip />
        {/* PLAN YOUR TRIP  */}

        {/* TESTIMONIALS */}
        <Testimonials />
        {/* TESTIMONIALS */}

        {/*  Recent Articles & Posts   */}
        <RecentArticlesPosts />
        {/*  Recent Articles & Posts   */}

        {/* RECOGNIATIONS & COLLABORATONS  */}
        <RecognitionsCollaborations />
        {/* RECOGNIATIONS & COLLABORATONS  */}
      </div>
    </>
  );
}
