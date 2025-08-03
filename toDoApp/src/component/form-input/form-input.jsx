
import {FormInputLabel, Input, Group} from './form-input.styled-components'



const FormInputs = ({ label, ...otherProps}) => {
    return (
        <Group>
            <Input{...otherProps}/>
            {label && (
            <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel> // to include the label and input wrap together 
            )}
        </Group>
    ) 
}

export default FormInputs





