
const validateEmail = (mail) => 
{
 if (/^\S+@\S+\.\S+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

const checkPassword = (psw) => {
      return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(psw);
  }

export const nextClickHandler = (state, setState) => {
    if(state?.step1?.active) {
        if(validateEmail(state.step1.email) && checkPassword(state.step1.password) && state.step1.password === state.step1.confirmPassword) {
            setState((prev) => ({...prev, step1: ({...state.step1, active: false}), step2: ({...state.step2, active: true})}))
        }
        else if(!validateEmail(state.step1.email)) {
            setState((prev) => ({...prev, step1: ({...state.step1, emailError: true}) }))
        }
        else if(checkPassword(state.step1.password)) {
            setState((prev) => ({...prev, step1: ({...state.step1, passwordError: true}) }))
        }
        else if(!validateEmail(state.step1.email)) {
            setState((prev) => ({...prev, step1: ({...state.step1, confirmPasswordError: true}) }))
        }
    }
    else if(state?.step2.active) {
    setState((prev) => ({...prev, step2: ({...state.step1, active: false}), step3: ({...state.step2, active: true})}))
    }
}

export const previousClickHandler = (state, setState) => {
    if(state?.step3?.active) {
    setState((prev) => ({...prev, step3: ({...state.step1, active: false}), step2: ({...state.step2, active: true})}))
    }
    else if(state?.step2.active) {
    setState((prev) => ({...prev, step2: ({...state.step1, active: false}), step1: ({...state.step2, active: true})}))
    }
}