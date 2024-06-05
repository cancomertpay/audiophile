// components
import NavItem from "./nav-item";

// assets
import headphonesImg from "/public/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "/public/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "/public/assets/shared/desktop/image-category-thumbnail-earphones.png";
function NavList({ toggleNavbar }) {
  const navList = [
    {
      id: "headphones",
      image: {
        src: headphonesImg,
        alt: "Headphones image",
      },
      title: "Headphones",
      href: "/headphones",
    },
    {
      id: "speakers",
      image: {
        src: speakersImg,
        alt: "Speakers image",
      },
      title: "Speakers",
      href: "/speakers",
    },
    {
      id: "earphones",
      image: {
        src: earphonesImg,
        alt: "Earphones image",
      },
      title: "Earphones",
      href: "/earphones",
    },
  ];
  return (
    <ul
      className="flex flex-col md:flex-row items-center justify-center gap-14 md:gap-3 lg:gap-6"
    >
      {navList.map((item) => (
        <NavItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          href={item.href}
          onClick={toggleNavbar}
        />
      ))}
    </ul>
  );
}

export default NavList;
