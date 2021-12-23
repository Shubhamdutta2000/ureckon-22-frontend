import * as React from 'react'
import { useEffect, useRef } from 'react'
import InputImg from '../../assets/SVGs/input.svg'
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material'

const Dropdown = (props) => {
  const {
    width = '400px',
    label,
    placeholder,
    name,
    value,
    onChange,
    type,
    disabled = false,
    required = true,
  } = props
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const w = ref.current.parentElement.offsetWidth
      ref.current.style.height = `${0.214 * w}px`
    }
  }, [])

  return (
    <div style={{ width, height: '40%' }}>
      {/* title  */}
      <p
        style={{
          color: 'white',
          margin: 0,
          fontFamily: "'Blanka', sans-serif",
          fontWeight: 400,
          fontSize: '1.5625rem',
          paddingLeft: '7px',
          lineHeight: '1rem',
          letterSpacing: '0.1em',
          textShadow: '-1px 1px 5px #0DB3B3, 1px 1px 5px #0DB3B3',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>

      {/* the input image box */}
      <div
        ref={ref}
        style={{
          position: 'relative',
          width,
        }}
      >
        <img
          src={InputImg}
          alt=""
          style={{
            width: '95%',
            height: '95%',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            left: 0,
          }}
        />

        {/* dropdown input start */}

        <FormControl
          fullWidth
          style={{
            outline: 'none',
            top: '17%',
            left: '3%',
          }}
        >
          <Select
            inputProps={{ 'aria-label': 'Without label' }}
            displayEmpty
            name={name}
            value={value}
            type={type}
            onChange={(e) => onChange(e)}
            disabled={disabled}
            style={{
              width: '89%',
              position: 'relative',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '1.5625rem',
              color: 'white',
              paddingLeft: '10px',
              textAlign: 'left',
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 500,
            }}
            color="secondary"
            variant="outlined"
            required={required}
          >
            <MenuItem value="" disabled>
              <em style={{ color: 'grey' }}>Gender</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="others">Others</MenuItem>
            <MenuItem value="prefer not to say">Prefer not to say</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Dropdown