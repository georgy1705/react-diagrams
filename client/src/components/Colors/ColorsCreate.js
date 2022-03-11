import { 
    ChipField,
    Create, 
    ReferenceArrayInput, 
    ReferenceInput, 
    required, 
    SelectArrayInput, 
    SelectInput, 
    SimpleForm, 
    TextInput 
} from "react-admin";

const ColorsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput validate={[required()]} source="title" />

            <ReferenceInput source="color" reference="choose_one">
               <SelectInput validate={[required()]} resettable optionValue="color" optionText="color"/>
            </ReferenceInput>

            <ReferenceArrayInput source="options" reference="choose_several">
                <SelectArrayInput source="name">
                    <ChipField source="name"/>
                </SelectArrayInput>
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);

export default ColorsCreate