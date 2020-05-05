import React, { FC, ReactElement, useState, createContext } from "react";

interface IFormContext {
    onChange(e: any): any;
    setInitialValues(values: any): any;
    setValue(key: string, value: any): any;
    values: any;
};

interface IProps {
    children: ReactElement;
    initialValues?: object;
};

export const FormContext = createContext<IFormContext>({
    onChange: () => null,
    setInitialValues: () => null,
    setValue: () => null,
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

        if (name) {
            setState(state => ({
                ...state,
                [name]: value
            }));
        }
    }

    function setValue(key: string, value: any): void {
        setState(prevState => ({
            ...prevState,
            [key]: value
        }))
    }

    function setInitialValues(values: any): void {
        if (Object.keys(state).length === 0) {
            setState(values)
        }
    }

    const context = {
        onChange,
        setInitialValues,
        setValue,
        values: state
    };

    return <FormContext.Provider value={context}>{children}</FormContext.Provider>
};

export default FormProvider;