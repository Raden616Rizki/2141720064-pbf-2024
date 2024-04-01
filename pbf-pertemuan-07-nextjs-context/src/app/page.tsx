"use client";
import MyApp from "@/components/atoms/myapp";
import MainPage from "@/components/templates/main_page";
// import ProfilePage from "@/components/templates/profile_page";

export default function Home() {
  return <MyApp Component={MainPage} pageProps={undefined}/>;
  // return <div>
  //   <MainPage/>
  //   <hr />
  //   <ProfilePage/>
  // </div>
}
