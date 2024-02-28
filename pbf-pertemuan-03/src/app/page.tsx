import MyGallery from "./components/mygallery";
import MyProfile from "./components/myprofile";

export default function Home() {
  return (
    <section>
      <MyProfile></MyProfile>
      <MyGallery></MyGallery>
    </section>
  );
}
