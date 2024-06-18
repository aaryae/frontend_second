const ButtonSecondary = ({ value, theme, icons }: { value: string; theme: boolean; icons: React.ReactNode }) => {
  return (
    <button
      className={`bg-transparent py-3 px-6 m-1 rounded-lg border-2  transition-all  hover:text-black  hover:bg-white hover:-translate-y-1 flex gap-2 justify-center items-center  ${theme ? 'border-white ' : 'border-black'}`}
    >
      {icons}
      {value}
    </button>
  )
}

export default ButtonSecondary
