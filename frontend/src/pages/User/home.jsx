import React from "react";
import ButtonPembayaran from "../../assets/ButtonPembayaran"; // 
import ButtonPengaduan from "../../assets/ButtonPengaduan"; // 
import Header from "../../components/Header/header";
import BottomNavbar from "../../components/Navbar/navbar";

const Home = () => {
  const handleClick = () => {
    alert("Tombol gambar diklik!");
  };

  return (
    <div>
      <Header />
      <ImageButton
        onClick={handleClick}
        imgSrc={ButtonPembayaran}
        altText="Button icon"
      />
      <br />
      <ImageButton
        onClick={handleClick}
        imgSrc={ButtonPengaduan}
        altText="Button icon"
      />
      <BottomNavbar />
    </div>
  );
};

export default Home;
