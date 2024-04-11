import HomeContainer from "../../containers/home-container";

export default function HomePage() {
  return (
    <div
      id="HomePageWrapper"
      className="h-screen w-screen text-center flex items-center justify-center bg-opacity-95 bg-black"
    >
      <div
        id="HomeContent"
        className="border border-[#FEFCFB]  bg-[#FEFCFB]"
        style={{ width: "92%", height: "92%" }}
      >
        <HomeContainer />
      </div>
    </div>
  );
}

// BG = #0A1128
// Border = #FEFCFB
// Text = #FEFCFB
// Content = #034078
