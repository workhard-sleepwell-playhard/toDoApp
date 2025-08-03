import {BaseButton, GoogleButton} from './button-styled-components';

export const BUTTON_TYPES_CLASSES  = {
    base: 'base',
 google: 'google-sign-in'
}
// store the butttton classes

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => 
({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleButton,
}[buttonType])
// attach the classers to buttonType

const Button = ({children, buttonType,  ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>
};
//...otherProps rerenders the selected button style 

export default Button;