 const Checkbox = ({id , name, type, checked, onClickHandler}) => {
    if( name === 'circular')
    return (
        <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id={id} defaultChecked={checked} onChange={(e)=>{onClickHandler(e.target.value, type)}}/>
    )
}

export default Checkbox;