import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const ChangePassword = () => {
  const [isCurrentPasswordShown, setIsCurrentPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)
  const [isNewPasswordShown, setIsNewPasswordShown] = useState(false)

  const handleClickShowCurrentPassword = () => {
    setIsCurrentPasswordShown(!isCurrentPasswordShown)
  }

  return (
    <Card>
      <CardHeader title='تغيير كلمة المرور' className='pbe-6' />
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='كلمة المرور الحالية'
                type={isCurrentPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        size='small'
                        edge='end'
                        onClick={handleClickShowCurrentPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        {
                          !isCurrentPasswordShown && (
                            <BsEye />
                          )
                        }
                        {
                          isCurrentPasswordShown && (
                            <BsEyeSlash />
                          )
                        }
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Grid container className='mbs-0' spacing={5}>
            <div className="df mt-14">
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='كلمة المرور الجديدة'
                  type={isNewPasswordShown ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={() => setIsNewPasswordShown(!isNewPasswordShown)}
                          onMouseDown={e => e.preventDefault()}
                        >
                          {
                            !isNewPasswordShown && (
                              <BsEye />
                            )
                          }
                          {
                            isNewPasswordShown && (
                              <BsEyeSlash />
                            )
                          }
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='تأكيد كلمة المرور الجديدة'
                  type={isConfirmPasswordShown ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          size='small'
                          edge='end'
                          onClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
                          onMouseDown={e => e.preventDefault()}
                        >
                          {
                            !isConfirmPasswordShown && (
                              <BsEye />
                            )
                          }
                          {
                            isConfirmPasswordShown && (
                              <BsEyeSlash />
                            )
                          }
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </div>
            <Grid item xs={12} className='flex !flex-col gap-4 pbs-6'>
              <Typography variant='h6' color='text.secondary'>
                متطلبات كلمة المرور:
              </Typography>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2.5'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  يجب أن تتكون من 8 أحرف على الأقل - كلما زادت كان أفضل
                </div>
                <div className='flex items-center gap-2.5'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  يجب أن تحتوي على حرف صغير واحد وحرف كبير واحد على الأقل
                </div>
                <div className='flex items-center gap-2.5'>
                  <i className='ri-checkbox-blank-circle-fill text-[8px]' />
                  يجب أن تحتوي على رقم واحد على الأقل أو رمز أو حرف فارغ
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className='flex gap-4 pbs-6'>
              <Button variant='contained'>حفظ التغييرات</Button>
              <Button variant='outlined' type='reset' color='secondary'>
                إعادة تعيين
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePassword
