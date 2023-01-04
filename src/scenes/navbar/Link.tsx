import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/Shared/types";
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCaseLink = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  const onClick = () => {
    setSelectedPage(lowerCaseLink);
  };
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCaseLink ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300 `}
      href={`#${lowerCaseLink}`}
      onClick={onClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
