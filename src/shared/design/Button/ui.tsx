import { ButtonProps } from "@/shared/types/model";

interface Props extends Omit<ButtonProps, "type"> {
    type?: ButtonProps["type"];
}

function Button({ type = 'button', ...props }: Props) {
  return <button type={type} {...props}/>
}

export default Button;