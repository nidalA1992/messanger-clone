import { IconType } from 'react-icons';

interface IAuthSocialButtonProps {
  icon: IconType;
  onClick: VoidFunction;
}

function AuthSocialButton({
  icon: Icon,
  onClick,
}: IAuthSocialButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='
      inline-flex
      w-full
      justify-center
      rounded-md
      bg-white
      px-4
      py-2
      text-gray-500
      shadow-sm
      ring-1
      ring-inset
      ring-gray-300
      hover:bg-gray-50
      focus:outlineo-ffset-0'
    >
      <Icon />
    </button>
  );
}

export default AuthSocialButton;
