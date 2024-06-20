const Rememberme = () => {
  return (
    <div className='mb-5'>
      <input
        type='checkbox'
        name='rememberMe'
        id='rememberMe'
        // checked={rememberMe}
        // onChange={(e) => setRememberMe(e.target.checked)}
      />
      <label className='ml-2 ' htmlFor='rememberMe'>
        Remember me
      </label>
    </div>
  )
}

export default Rememberme
