interface ICustomButton {
    label: string,
    disabled?: boolean
}


const CustomButton = ({ label, disabled }: ICustomButton) => {
    return (
        <button disabled={disabled} class="button">{label}</button>

    )
}

export { CustomButton }