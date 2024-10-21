import Icon from "./icon";

/**
 * UserInfoCard component to display user information with an icon.
 * @param {Object} props - The properties for the UserInfoCard component.
 * @param {string} props.label - The label for the user information.
 * @param {string} props.value - The value for the user information.
 * @returns {JSX.Element} The UserInfoCard component.
 */
const UserInfoCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}): JSX.Element => {
  return (
    <div className="flex flex-col w-40 xl:flex-row xl:w-[258px] xl:h-[124px] items-center xl:justify-start gap-6 bg-lightGrey rounded-md p-8">
      <Icon name={label} />
      <div>
        <p className="text-xl leading-6 font-bold text-darkGrey">{value}</p>
        <p className="text-sm leading-6 font-medium text-[#74798C]">{label}</p>
      </div>
    </div>
  );
};

export default UserInfoCard;
