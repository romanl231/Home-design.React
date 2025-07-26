import Link from "./Link";

interface LinkItem {
  text: string;
  path: string;
}

interface LinkListProps {
    title: string;
    linkList: LinkItem[];
}

const LinkList: React.FC<LinkListProps> = ({ linkList, title }) => {
  return (
    <div className="flex flex-col gap-2 min-w-[150px]">
      <h2 className="mb-2">{title}</h2>
      {linkList.map((link, index) => (
        <Link key={index} linkText={link.text} navigateTo={link.path} />
      ))}
    </div>
  );
};

export default LinkList;