interface NavLink {
  title: string;
  url: string;
  blank: boolean;
}

const frontLinks: NavLink[] = [
  {
    title: "For Recruiters",
    url: "/",
    blank: false,
  },
  {
    title: "For Students",
    url: "/",
    blank: false,
  },
  {
    title: "About Us",
    url: "/",
    blank: false,
  },
  
];

export const navLinks = {
  frontLinks,
};
