import React, { FC, ReactElement, useState, createContext } from "react";

interface IFormContext {
    onChange(e: any): any;
    values: any;
};

interface IProps {
    children: ReactElement;
    initialValues: object;
};

export const FormContext = createContext<IFormContext>({
    onChange: () => null,
    values: {}
});

const FormProvider: FC<IProps> = ({
    children,
    initialValues = {}
}): ReactElement => {
    const [state, setState] = useState(initialValues);

    function onChange(e: any) {
        const {
            target: { name, value }
        } = e;

        if (name && value) {
            setState(state => ({
                ...state,
                [name]: value
            }));
        }
    }

    const context = {
        onChange,
        values: state
    };

    return <FormContext.Provider value={context}>{children}</FormContext.Provider>
};

export default FormProvider;