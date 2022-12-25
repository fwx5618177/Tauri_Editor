import { AppBar, Container, Toolbar, Typography } from '@mui/material'

export default () => {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    {/* <div>Logo</div> */}
                    <Typography variant='h6' noWrap component={'a'} href='/'>
                        LOGO
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
