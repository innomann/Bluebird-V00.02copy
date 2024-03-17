import { Avatar, AvatarImage, AvatarFallback } from "../primitives/Avatar";

export const UserAvatar: React.FC<{ imageUrl: string; className?: string }> = ({
  imageUrl,
  className,
}) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={imageUrl} />
      <AvatarFallback>OG</AvatarFallback>
    </Avatar>
  );
};

export const MyAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <UserAvatar
    className={className}
    imageUrl="https://raw.githubusercontent.com/adarshtiwari1998/linkedin-web-app/e518c8fc18f5a2cf58562f134ff3da394d02c17b/public/images/user.svg"
  />
);
