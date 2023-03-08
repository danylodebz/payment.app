interface Iinput {
    name: string,
    placeholder: string
}

const Input = ({ name, placeholder }: Iinput) => {
    return (
        <form class="form">
            <label class="label">
                {name}
            </label>
            <input type="text" name="input" placeholder={placeholder} class="input" />

        </form>

    )
}

export { Input }