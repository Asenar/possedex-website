/*          POSSEDEX
            VERSION 1 / MARS 2017
            VERSION 2 / JANVIER 2018
            VERSION 3 / AOUT 2018
            REMERCIEMENT A L'EQUIPE LES DECODEURS DU MONDE
            INFINIMENT MERCI AU MONDE DIPLOMATIQUE QUI A PUBLIÉ SA BASE
                             .y.
                            -dMm.
                           .mMMMd.
                          .dMMMMMd.     .:+oyyso-
                         `hMMMMMMMd` -odNMMMMMMMNy`             `..
                         sMMMm:dMMMddNMMMMmyoomMMMh    `.-/+oydmmN:
                        :NMMN/ .mMMMMMNd+-`   -NMMMyydmNNNMMMMMMMd.
                        hMMMy   -mMMMN:        sMMMMMMMMNNmhhNMMMo
                       -mMMM-    -mMMMy`       -NMMMy+/-.`` /NMMN.
                       /NMMM`     -mMMMy`      `hMMM+       sMMMh
                       -mMMMo`     :mMMMs`      sMMMd      .NMMN/
                        +NMMNy`     :NMMNs      /MMMm`     +MMMd.
                         :dMMMd:     :NMMMo`    `NMMN-    `dMMMo
                          .yMMMN+     :NMMNo     NMMN/    /NMMM.
                           `oNMMNy.    /NMMN+    dMMMo    yMMMh
                             :mMMMd-    /NMMN+   yMMMs   `NMMN/
                         `-://ohhhhy+////ymNMN/.-shhds:--+mmmd.
                       `/osoo+++++++++++oosshdsssoooooooooosss+/-`
                      `+so/:::::::::::::::/osss+:::::::::::://+os+-`
                      -ss/:----------------/ss+:--------------::+ss+-.```
                      .ss+:::::::--::::::::+sso::---------------::+osoooo-
                      `+sso+++///::::///+++oosso+//:::::::--------:::/+ss-
                     `/ss+/::::::::::::::::::+ssssoooooo+:------------/ss-
                     .os+:-------------------:oso-....os+-------------/ss-
                     `+so::----------:::::://+ss+`    +so:------------/ss-
                      .+so+////////:::::////+++os+.   -ss/------------/ss-
                       `-oso//:::::------------:os+   `/so/:----------/ss-
                        `oso:-----------------::oso    `+so/:---------/ss-
                         :ss+:::::::::::::::://+oss/.  ``/so+:--------/ss-
                          -+osoooooo++///::::::::/+so- -.`:oso/::-----/ss-
                            .-:::oso:-------------:os+` o+ `:oso+/::::/ss-
                                 /so/:------------:os+` /Ms. `-+ysssoooss-
                                 `+so+/:::::::::/+oso.  +MMd-  .hNmmh----`
                                  `:+oooossssooooo+:`   yMMMy`  -MMMN/
                                     `..:dmmm/...`      :NMMM:   sMMMm`
                                        :MMMm.           yMMMh   .dMMMs
                                        yMMMy       ``.:+yMMMN:   :NMMN:
                                       `mMMM/  ``-+shmMMMMMMNNy    sMMMm`
                                       /NMMN-:ohmMMMMNNmdyo+/--    .mMMMo
                                       sMMMMmMMMMNmyo/.`   `.:/+ossodMMMN:
                                      .mMMMMMNmy+.`    `-+ymNMMMMMMMMMMMMd`
                                      :MMMMNs:`  ``./oymNMMMMNdhyssyhmMMMMo
                                      yMMMNyoooyhdNNMMMMNMMMMo`      `dMMMd`
                                      -dNMMMMMMMMMNNNdy+:oMMMN:    `:hMMMN:
                                       `:+syyyyso/:.`     yMMMm` `/dMMMMd:
                                                          .dMMMhomMMMNh/
                                                           -NMMMMMMNy-
                                                            +NMMMms.
                                                             sMmo`
                                                             `/`

*/

export var Possedex = {

    current_entity : null,

    data : {},
    regex_url_seule : new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g),
    regex_url_markdown : new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm),

    styles : {
        reset : {
            'position': 'static',
            'box-sizing': 'border-box',
            'margin': '0',
            'padding': '0',
            'width': 'auto',
            'height': 'auto',
            'min-height': '0',
            'min-width': '0',
            'max-height': 'auto',
            'max-width': 'auto',
            'background': 'transparent',
            'z-index': 'auto',
            'transform': 'none',
            'top': 'auto',
            'bottom': 'auto',
            'left': 'auto',
            'right': 'auto',
            'border': 'none',
            'outline': '0',
            'float': 'none',
            'opacity': '1',
            'border-radius': '0'
        },
        reset_text: {
            'font-family': 'Helvetica, Arial, sans-serif',
            'color': '#2e3942',
            'font-size': '13px',
            'line-height': '1.38',
            'font-weight': 'normal',
            'font-style': 'normal',
            'font-variant': 'normal',
            'text-decoration': 'none',
            'text-align': 'left',
            'text-indent': '0',
            'text-transform': 'none',
            'letter-spacing': 'normal',
            'direction': 'ltr',
            'world-spacing': '0'
        },
        infobulle: {
            'display': 'block',
            'top': '60px',
            'right': '20px',
            'position': 'fixed',
            'width': '500px',
            'height': '300px',
            //'width': '255px',
            //'width': '215px',
            'border-width': '4px',
            'border-style': 'solid',
            'border-color': '#ffc000',
            'border-radius': '2px',
            'background-color': '#ffffff',
            'box-shadow': '0 0 10px 0 #5d666d',
            'padding' : '6px',
            'transition': 'all .5s ease',
            'opacity': '1',
            'transform': 'translate(0,0)',
            'overflow': 'hidden',
            "z-index": "2147483647"
        },
        header   : {
            'display': 'block',
            'padding': '10px',
            'overflow': 'hidden',
            //'background': currentColor
        },
        title   : {
            'display': 'block',
            'font-size': '15px',
            'text-align': 'center',
            //'color': '#222'
        },
        title_link: {
            'display': 'inline-block',
            'font-size': '15px',
            'font-style': 'italic',
            'text-align': 'center',
            'color': '#ffc000',
            //'line-height': '20px',
        },
        picto: {
            'display': 'inline-block',
            'float':'left',
            // TODO: encode the svg version of the logo, yellow version.
            'background-size' : 'auto 100%',
            'background' : 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAACiCAYAAABPs5MKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAB79SURBVHic7Z15nBTVtce/p2ZjEzc2iQruGIkL8nyoMN09IAbiFo1GXxJMXEKIW+L6UN9LXhKXSNTELRrjLoq4BTckwHT3DCABREVx45nwNAbFHYZtljrvj6qZ6aWqurqquqdfnt/PZz461VX3Xub0vXWXc34HSoAuobem+XYpyv6SboySlLqNi9AvjVdqqqMuUJMMQLgYaFNFRNCo6/gSi+h7nsEVwPbAAJLsG3n5X9JFpD1Pk+yNMq3rQhVjgbeirCOjrmoMjsDkMITdgQHARoS/0sECaeDFUtRbSUQ7bAq/A+q6fleOBO6KsgpdQm9a+SlwPspgJPcGwABNk8bkLEnw31HWX0nk/tMDo0mOQXg65/IaiUc3dGqSIQjPAYf4fORjlIQkeC2qNlQSkRhPk/RCWAXsk/8hu0iCD0LXsYI+tJAC/qXIR99AGSUJtoZtQ6URzYRF+C+cDAedQ2d4NnIbxRsOYH8MpkbShgojtPE0ycHATz1qCG08TTEOYUrwAjgvbBsqkVDG0+eoQ7gXqPG4bVyoOmZTBdxMuCF+L23iwDDtKIQ2s6/Oo28p68glXM/ry2+AgwrcdbAm6Re4jkFM8VFHYUxioctwQZfSnw5+I0ezqVR1OBHYeJrkGJRzfNxajfKvgepYQm/gv4I864DfGWpR6Gyq2MrDwGelKN+LQMbTJCMQ7sfvUCYBh85WpgO7BXo2vw1DIyknl0HcCExGWFyS8j0o2nj23uXTwI6+H5LiJy2aZG/gkmKfcy+QQZGV1VlkmjPAngx1VLjxdB59EZ4C9i6ynjGa9L+bo7OpQrgT6FVkPV5EajxNMQ7l9/avn5PgjSjL94Nv4+kK+lDH08DhAerpBxzs++5BXA3EA9TjxU5RFaRp9gAeB2oBEBaLYEZVvl98GU+T9KOFZ4FEiLrG+qorzYlEOVx20xFFIbqEnVCeBQZ2X2RJFGUXS0Hj6SKGYpAibE/w8d7TJHGUB4hwzzWD1rAFaJJetDIH2D/rA2FR2LKD4Gk8TXMI7SxDOTSCujx7nqaZiPAM0CeCupwIZTxVDIQHyP93tNGXFWHKDoqr8TTNFJRFwFciqmuIPYN0qutMeyhy2qFoiaj+baGeTnED8C2HT16U0WwOVXZA8oyni9hOUzyMch9R9wK39Z5yDG5ni8IrEdUeePdDU1yCcIHzh+VfInSSZTxt5ADaWQ6cWpLa3E8YXvV4ZjVEcpwT6FhKU5wNXOt6g9EzkxWrahtNMhqDJmC/ktXmNmkRz8PSnRD+EkHt/yj2AU3zQ+B23F8vJiZNoVoVAgOsHXGEBUS4FnJhP13suFh273kwDJNUBHX7Np4qomkuQz0NB/CKJPg4fNOCYehsquhgFpbHV6kR2hx6n8ka3IfGYQjpCOr2NWzqEnqT5j6Uaym0ZFEaI2hXYAwGcyol2nF3xOG9JwnawXV7aSA1rIaQOxjKuoK3JBlBKy8A3/NVprAwVJtCYqAhTqiD1ei23nN77wmt7AQhvcCUv7l+lKRak1yMsBL/Z4dtKM2h2hQSAxhd1hqVUbrCcQniNeMchvJSqHpNZ+PrIoYi/AVhBtC7iBKbJRHZGjQQBtG+6/wMbTW0OBzOqofxqhiGEcp4n8sEPnH8pI0pwKgAZT4Toj2RYADrIytNeMHnnflDp1mg53XwcsBWgdeQK5wUqESpBONphOsUk6X4mZI7rPdkPO+DS+9QhlEXoucp7zheTrMbBNq3fUdirAncnogwgD9FVppwJMplBe9TDre9wnKfd560CHvIkawHPg/YLkfjYXISQU4whCcDtSNiDLbjKQLsPrjwL8DzULA392eIw6zOdJ1x7mn/N+gQ7zxsBh8yHw7YjkgxZDSbUX4ZUXlVGExE+AmFJi+mw3vPcH3vDbbdBz8M2K4842mSIcARDvd+Yf+48abUszJgOyLF2vrZjrsgst37EyXGS/ahqhdO+5xuxhOq2BMJ2PNqWe1Q4ok4b309h/cM/KFAbSgBBoCMpg2DfyOK3Xtlks6jLyZX4H0Mk9/zqngVXCJpTfZDA/lGvi9H8GneVct4uWwFz1mtSRUzA7ShJHR986Se11H+I4Iy+1DHZHv2eIPHfUO1uetdZrVhLBuBdx3vVg4ANhTdGodJkC5gZ9TBg1q4F/V0i39OxvHXottQIrKHjTjXI8yJoFzrxLmN6/HyJHZ677kNnQYjkQDGc5oE1XAC+Ye/HXTwW4SjXMsSbi66/hKSZTwRFJPvE3YfEY7XxQySo/gC9eh9zoezq1zu/Rqm50TCjXzjqeMs8wmq2R53/8411LMgQP0lI++FLQk+t98HYYIm6mjlDAB6cxM4vHMsnHqe23JhbySAe34VyzJ/1flsD4x3uHMGJl93LUf4dU/4Znrh+MeQGK8i/DBUycJUVQwZwwaUG13u2l8XsHPWFfc9ToPiPbU3MI43s65UcyydzrLdNEqc5cAkl3LWYHJfkXWXHNdvssR4CLgpRNnDSXIsANXcCmx0qoaanKFzO97C3U1vRJFtWJbXW5xmmcoM+0vkHHkr/Nw+c6wovIch5SIK75Z4lX6NJqmWcXwG3OlSR5bxZDRtuMt/FGc8YWlWVVbwY+7Q+Apx5lHNRHDYsoOXqWdWUfWWCU/jSYJ22jkFeD9g+ftjcDqAPXQ69aj89566TFpgl6Jq1+z3HXVMJvfMTrjOVmlyGjJN4MeV9q7rpOAEQCbwISbfBtoC1aD8QpfSXxL8HXjE4Y5D7SDKTKKR3qjJ8TrLn2WuxWS2KgZwtEMJd0jc9zFX2fE1e5MGFgMXBaxjKFu42iqIGeTvoNTRlvOu8TqY9c879kmEVaQlNzI5554bJUE7aQ4lf4mwFuXyCNpRMnzHzEmcmzXFKOD7RdciTNMksyTGIk0xj9z3jjKWzHdrLa8WmB5sBlYDL6NZy5AhCAcCB0BOrzOYiLJdxpVPUe622zc54yvVgnIrNVxl7/hULMXJV/XjHFoYBUUrKxgIf9AkoxBmoHmThuz33pG8R5rPgR0yrpp2RO7d9GWuPbFxRJfQmy05PcnkxKyTO+XmDB+Uo4BG4E+085Cry0SFUfRBpCYZjrACctZnvh7mVklwrqZZmiMy8AXr2VlO6Y6h0xTNdBv1JUymSUNwz2ltZk/a+BoGgxCEGh7r3LDWJDtIIuBBbw8SKA5OUxwFzMV5al2IExFq0Zzpt8FBUt89y9QUtwHTUGYCZ/0zyk+FJZAahMSZj/KrgHXehcmLkLM7r3kRRK+hPEKcKV8azpngIjpxfoHwbIAnd0SYi+a4EuRuUlexADirUtdYlUCo8GFtZkc6WAHZ53I+WQMMo3uf8T2Js3uY9vx/I3TstzZxICYvEEUgZgfDZTz/E7qcgOgSerONQxEOB0YivI0wt1J8VnKJRm8zxfeA+3MutwKLgWaUNXRG6QjbAUOwZIVHAocBw+3Pviuxwm4GupCvUMVxCHuiKMpmDP4G9k897xcabrWJXVD2AfbB5GsYjEEZhZMInvAXTC6WRM8IB7gRpdLtLQjn2OFYt1HFXL+LXE2zG8q3EDZLjDs86hiCcANwCt4z3VZgHfAJYpvXcqEYiPWlGUjxEs0mcKXEuabI50qGL+NpE7tIvXeIlK6mlo84yD4Xixxt4quY/JnoBA6Ccr7EK8MdwtN4uoI+bORShMsQLpAYfyhXw7LaYU2MVtI5vPYsrQgjK8Xd3RFt5Bu08BbCz4BeKDdr2tFJtfS0cwWVYTiAWkx+1tONAIeep0n6IdwE/MDh/nVUM1rGRuYeXxBbin8d5Qm79ss2lCE9vaWW9dLWheyF8CesWaATu9DO4/occZkcUpTGL1s5DKOiDAdQh8FEYHbnBU3xn8DxwFCs3BJVQH/74w1ka599hvAE9VwaJl1Pl/F0IXtRRTOFT6vH0JtbgbO8btIkAzD4Kia1GPSngw6qWQe8xzg+8N3oKvaryGxE1sb67IwrY3AP0uyf8/uOKBeTZhnwaNAmVIPt21HFXPy6GQhnaooXJd6lNwmAJhmJcDbwTWA3FGtgtrOMdK280qzXFAtRZhNnTgFDbufxWc+hDM76Xdgc4Es2gRDGsyYsdfwMt7wI7vxOk9aRjSqGprge4WXgfApLCw8CTkN4kjRLdKHn9L8yD0Qlz30wCKEEXA07dCqIj2YNwmOaZFfS3AFcSLAjojFUsUjTrl+eN12u9zTZOzFahGxzJ+KZ0qAgBpaOZtAJwWCE5RR4//lgOMpcTWadnFuYrCQCrcwSkOuoMdjxLi803NvcsDdhwzAk5POd7IVwT+5F21XhuYjqiJKPOv9Hk/SCQAmvQh13GRT/rislJ2ijowtej+zsFCBTc2wk3lldnAmZ1dMgiC9KKTHyT+glzlyorB19JMsReUygMjR8zwv10iwBozXN1/KumpxLNLqb0aAZQaD5/qD+SwmBQSX9QbrJCwaRBl5BS6L6Hgxby8yW4gqqeh+y52nlhOl24SJILgluQbmq3M1xYBudAagtHE/w5B0hjReNimzUuKrtSoIrEa4kojwJLhQq+62ukC/hzMC1hF4qWJIbZU+lUgDPPHQS4ypMjgbei7jedSjTkYJxGasBtJGDUBoC1xZ2tikJ2jEjUYGIkoKBjNLAQmrZD7gUQkkFm0AK4XQGMlwSXIsWdIm0AmGsnPBhXElCzzYhwRPAn8MUFDHOch45yBFskTgz6MdQ4DgsgRs/sYQfYWmunUM1e0ichMS4Xw6wd3IK7VsqqikOxznPgn9CDpvVYKlAaJLTbcnF4aEaFAW5QZEFsINOnrZ/LAHUNvbEYBjdQ/DndPAhtazxcZjs3fMNvoXyY8I6cIV0KO46z5MEH2iSBAazgmaajIgO4LEwBdjG+QfBF/bexosmPY9VUgiyTtIlwVpgjD0kjEUYhOkw8xL6YHk7DwP2IP+wMQwXSiI7lrwHKFcK0Wh6XiZ2KK+vcF5VhBQHYBCzJaHGEyw/wxcI50ssz3m3/Gj3pnOJid54xWCfgr9m/9xqZ6gcC0ywTywOA9dszSaWUNtMangwMwzZL7qCGq9Ay4LPK0aed7XyUXTuyF6VRzhsRoG9eE3ZPwDoYgbRzmBM+8zLwKSD99nKWi9HJk0yhDjrPV3XN7KXJjmLKu6Wel732077EPpXpPg5uQq6JusCHSsXS8h1Xjm+X4Gw/WHSwDaERzD4ha3n4nTvqQgPActRngaeIc4qJ6Nrkr0RvgdMBZZL3Bb6yb0vxacUk9Q4GH+QOFODPuzbeJpiPpacxyconyB8grIO5T2E1bZURyRokoMR5pHt47EO4fsSc16PapLbkaw/xGbgbaw13Ras9/DeZB4eK1dJgisdy0vRBAFThPtFuF1iTAv6eDHD5lbgGLtSuv5r/7+m+CswC4OZxQxfmehsqhjMWbbgTq42yy4oz2qSH0iCB/Me7s2lbOUYumMZ+lAoybB4Cge8SqmNF3pv0y+FRbH3BC7HZLWmeENTXK8pjtJFhV33NEk/TfEDBrEKK3OWW2aRaoS7tInD8po3hg0IFxb+h2Q+5PHvjy7pohdlmrBsZQ51efIaboywfy6kHbV75SvAO8BWhE2Y1GAwGOUgrJQ4flPB1GLyW5zEvet5jDRv4lejzMzIuJxLB+kQQd/+iGqHpWA9R7NJk0xDmElxsewC7GX/WGQ64wbjcE1ysCSy9aBFMDXNLJSf+2yZq56MNPCWpngXShhqHYEbhG8kwSys915QIbnoEL7p8kkxmbWcJRo7UeYWUVbxlO2dZyNx5tKPPRC+jbUHWbzuczQ4O/0YrC2ijAG5IuVZFE4vEI6Qw2YwHZbRtEmM2RLnZAYyEGUSyh0ET1oRBGcX+W1Fyit32DNoJxIswVpulIry9rxc5ABaJcHzkuBH9GM3u0eWIwmu8x5ITdGb5N92+8De+vtNkeX5pyd6nhsZPTKGcrgt81+qAC3n03Nl1yLLOVwXMsz1037cC+5ZL0NR7neeXyTBUolxAko9pRl6nJPtCl91ud8tYEUwONutEnvTeyql+BKWc7ZZCE0yRldnuxBIgkVsYxTCLUT3B9iC8EfnRjDR5ZkWcNiZAUuJPl9tt/vjOPNx08gOg1FJPU+YxEes1hQnZ10+mk0S4zz7Dxve40u4RGIu5Yir59loDG7GeVI1gLYCGZr7cS5EvHSopJ6Hshxr83e2pnjAPnbpQhIsoBcjsST/g/hdtqFcIjFudb3D5CzcUqgpCUzOcflseu6okYmMpo1tnEyUySIr6p1XyzK6T4e/i7BM0+yfeYuMYYPEuQBldFGqgUIa5QhJeM/+JMFalJ+4fDxJGngcK0FjLsP5yNuBVo5mEzFOBC7APUuLfyRcGZGf52mKpyFr7dQCnCFx59hrbeRQhPMQjiXffeID4EmU+4v1a3FoB0AbbQykhn2xNKhz//0f0sZ+clThnEW6lP5s5UyE4225yeIPtk3i0kC66OdsSmG8SeQHQypwM7X8uxzBFsfnklRjsD/KEDvc9w3q+R+3U3Rbrf0BlOmScMxMeTDikCTY5ARpYI6meA7nXAo3Sry40wm77bvRwZ4YDAUG2IIDAxD6Y4ki9EHoi7IDUIUy0+0s0S/RG08xSLMKS2E9lzeBKWH1yXQRQ+lgtv2Nb5Y49Y73pXiL3IhV4RaJcZ428g0Mx3TZJsIkt0PfSiLydZ7dU6bhPCEZAbygaX6flwDKB7qCGk1xHu2sylDGHadp1+VB/k5PZ2xBgrnguA9qoMzUNIcU275yU5JFusRpxoohcKIK5UdU85ammK7Nhf1EdCn9NclZtLAKa6aam/nrOy6POom7jdD5bC+Cibis+6xhr1FTricXFUFJHZA0xTTgerwPWrfas84/o7yEso5aWulgV5RDUOJYojxekUNvSjx7Vgugab6DOhpoosSZr0lG22oWXjxENdNlrL/4iXJScu8xWxbrWgiYUN4fH0o8X5VCGzkew3FddoXEuVoVIc27UHA/tA3hKeAP1LOgUkTLS33Qj4znHYlzMlZq7VK5sTtvUlc5z2yxk/qKpYI7z0f5NSgnocwjzfua4mFNMc1O6dZjlNx4nUicF4hxJMK5RH+Au9jlunO4cab7Q/GRwUOAU4HbqGOJJnsuqqpsxgNrJioxbkUYDcHcAx0x7YROuairstM++hx1VqNYEaLmAxGWalPRuZUioazG60RirKGaMUST1vsx1xxDmuH0lE01vez8s315DVyGV2ur70a892EHY9KojZGFffmmR4wHWAnt6/kmcAXBxQHepMpD9M7wdLodAV3ndW6HrQbwDax1q1fM3s4YLNBkQDGdgPSY8cCaMEicq7F0TIp1cl1GO3GP+IVqO+TMGSNLceIDj3r2BSZgcireAnY7IPxZUyX2ss6gR43XicRpZj2HInwHW2nBg89QptOPsTLBw+FJmIS3g3DmkOplPIBTEHax3Q29RIe2A57XJPEC5UVCxUUJqWKQ4gjgBIQDEAaibMYSrUmyjSfk6MIeYppiLvmZmbsR0hKz/sia4noouBndCoxF2RnhCbw3HjYCR5c632zk8XlhsRfAiwghFKeNxPAyHOROZlpc7+umFphNHYeylWMxeAr3/ElWD2xkYpiEjYWoiGEzSnQJvTHcU9pkMFRX2KJ56juydjitPMzHpDCZjLfR+2PwvCYZ7bPsovmnMp4qwjbuxEP+KgODTfaWmlFUWPREBvMraSCNksBbfGAHxN5DLQH/NMaz9yl/Z096/CG2mr3/nmdXxmWa4mRJsAKDr1PYgM9rIwcVVYcP/imMpwvYmTSPA+e53OI8xW+3jSe+w8s6EeBuTTJS6lmGwQTwDNS01oFOOqIh+D9vPE0xiWpWgefZ20OOV6tsgQMNlLixH8KTmmQHqWclBg3gqWYxAGWBNrk6BRfN/0njqWJomhM1zVIsf5mhng+Iq8OsFVypgU8H9kZ4VFdQI/WswiCB95pxECYLNekz+LMAFbdU0BTfQ9iJDlYgfAh8jsFArD/0CJTxpGnASmLoh/ep5wXSbCX3lKEzMlYCif50MoEWbgfOlHpe12ZidJDE/Qs1BGGhNpOQceHCACrKePak45cow7LGhDCuqcLTIqimHP6t0uVOETa9wBma5q8S4yoZx9vaTKKAAYfSwUJNknDyfPNLZQ2bSY4Aj4idIJjMUUs/0+mL2tnj/OVQ8kL5pab4MYCM422qSICnuuCuCAs9I5QKUFnGq+LUiEvcwBaSpFyHxR1VEaKRqRTgFk1a2V1kHG9jcBS56krZ7E4VC3VRgXe2CxVjPPsU4JSIi31eJrMNcU38sSNN7Iq7NlqxCMIdmuZ0AFuP5kTwXEfuRTsLdXHxSaEqxngo4wmZ1SoPawMZJF+3xWYHNJqZXwYGyl3ayEkAEieJ8LsCz4ygjfm6pLiJU+UYz4h8yPyITbbnmLoe0eyAX82W4qjCYGbXms7kegrrZh9IK/N0vv+kXBVhPDuRUtQOrvfIZLbZntlOMQlgJTIO477wNsp0TL6O8BOy3SnqMJkOloowOMRN5DOaWp7NDY1zozKWCgaTPZyFgtBGtR3DV81UsJ2NnJBA0vobUC5jO+7K0Pqcpyn6QlbSjvEZ9byLFtB9AVCORJijSzjGLSink4roeSinRVziIzKWd+1Z3L8XuLdQls1cXkEYLQludxBpzd2g7t4U0KIyXTbQyuNewZ5QAcbTpfTHcvKJrEgMZugKamjnYaLNOfsotRzulOBeFzAYrGEyg9fA3nyg6GOhSXzELFs52JEeNx7bOAH/onF+mEMf3qCFmeAc+hWQe1nPaU5Dma6gD9U8Rm4vFu4DIE2cYBsB30S4X2c7a870/Dsv2iFTUWbSwiJwXR4E4ffEONdROXcJO9HCM5CXAbSJ+q5MnMVJSWZzGoPYqsqZuVmte9QBSZsYiMk/iO5LtBXLUTbIEY8zwm+p50KndOCaZh+UOZAXofQaSkISfKxpjrPvCctt9heoqx09O2yanEy0vb8X0RruNxLjp46GS3GsnXkl13AvU8N423CHoPbQGZ4fk2JG5oWefudFPcuMCgX+U2L5yRZ1NbWa4jpgDrl+ocJilIQcyXpNMxElnXdPGISLNM0vu3/tIXQRu9PO2p5sgwttwFSJ52eO1ia+ismD4Bjy/Dz9OAloo4WfA5cRLG+8Hy6XONf03ISlg9OoPMN9iskp0sDCzIuqCE2cjckNOEXoCnMwOZVN7GJH4uZLKEfL1ZqiveeGTY18LzMsr9PBYXmGW8RQ0jxr64k6uUvcyYechMEUlFcpveE2otyHycoe+eZrmv3RCOPzwiI8Sx3/JmOygz41xWnALbjnRpqBwQyUO1GOL2EL27HyGz5IP+bIaDZDT63ztIBIW3m5jnqmZ67hNEk/hN8D3/V47nJMVmJFN4U/iXdmOfAgNcxyyrNUduPZIjv+HWNLxyaEqRJjZuZFbeQghEdw97o2gYttP5u5RP/e/hvwICYzpYG3vG4sf89LUY+UUO7eH6+inCLxbAFVW3rkBtxTZ7chXI9yBsLICNvzKcqjwIPEWey0rnSi/MaTHh8y76SWCzL3KHU+21PDnZCtE5rDVnsd91O8jpj80wo8g/IAW5jrlc3MjbJOWHQJvWnlA6LNdOmXFoQf5Q2TlpDOLHCNX+9kC9FsoP83wh+p5p4g+QIzKW/Pa+M4esZwq+z1W9c7xF67nY/ya/z1pDCGaweexOQOEjT6HRYLUe5hsyeGzPxhspkdSXM3cEKBZ9/ByokbdD38OcIfqeLmUshflW3Y1MUMoo33Kd8X5u8I50iMp7La0ci/YjCLQr6ayn22i0SxJ+1gpeu5DuVuSfiKug1E+XpeO6eVqT4F7qQXl2QuujOGyevA072gA+VKhJMp3nDrEW6ghpsK+Z9EQfmMp54L3qh4HZMfSkO2nJU2syNN3ONjF2QDJlMwuBAYVUS9H6D8mjruKIfROimL8eztsJLFZgOtKNewhWscp9wdNEHBddnHKMdicDn+3Sc+Aq6lH7d3blmVk/L0vNJuhy3C5EfS4KnfsrFAGetQJiJcAs4JgHMwUe6kjsvliAhU3gNScuOVcDtsLcJl1POoj6n3avJ9TDpZTwfjbBmsKT7qXYnBNKlnWVGtLQGlPxJqYgLRZn/8AmU6yv4SY7avNZO46ny2I5xGNWPJllXeQr7S0UaU81jPYZVgOCjHsKneiSaKYAPCTdRwY9FDVRXzXSIFfkErL1KTlfNhLZbhMmMYViKcKnFHzeoeo7Qa00kGIPydcHuBn6HcRh03hHm/aIo3yT4p+Axld+AYujNRz8XaSYl3PgbczGYuDbL3WGpKPWx+l+CGewnlbPqxqyS4MoKJwVM5vz9pL6B72Wq352N5V8ftzzdhcrLEuaASDQclHDbticrUIh/7B8qTCDMjF10T7kG5mM7RRq24Aklwr6Z4B5hJ96L87wjHSYOvyJ4eo2TDpqY4lvxvey5bsZLJN6M8QYy/lFI5XVM8CnzL/rUFeAJr73Is3X+L5RgcL/WsK1U7oqJ0xktzOkocYUeU3sAnKJ8ifILwPsIK+vCqQ6RNydCFfIUqluPutvAQtZxVzl2SMFSa613J0SS7YnARVjrUfYEqhJWY/EoSjqnZKpb/BX+fYKCEpueOAAAAAElFTkSuQmCC) center no-repeat',
            'width': '50px',
            'height': '50px',
            'border': '0',
            //'border-radius': '20px',
            'vertical-align': 'top',
            'text-align': 'center',
            'line-height': '18px',
            'margin': '-1px 10px -1px 0'
            //'color': 'red',
        },
        close: {
            'display': 'block',
            'float': 'right',
            'width': '15px',
            'height': '20px',
            'background': 'url(data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2013%2013%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C/style%3E%0A%3Cpolygon%20id%3D%22_x2B_%22%20class%3D%22st0%22%20points%3D%220.7%2C1.9%205.5%2C6.6%200.7%2C11.4%201.9%2C12.5%206.6%2C7.7%2011.4%2C12.5%2012.5%2C11.4%207.7%2C6.6%2012.5%2C1.9%2011.4%2C0.7%0A%096.6%2C5.5%201.9%2C0.7%20%22/%3E%0A%3C/svg%3E) center no-repeat',
            'color': 'yellow',
            'text-indent': '100%',
            'white-space': 'nowrap',
            'overflow': 'hidden',
            'cursor': 'pointer'
            //'border' : '1px solid red'
        },
        content: {
            'padding': '10px'
        },
        main_text : {
            'margin': '0 0 5px 0'
        },
        proprietaires_h : {
            'display': 'block',
            //'text-decoration': 'underline',
            'font-weight': 'bold',
            'font-size': '15px',
            'text-align': 'left',
        },

        proprio : {
            'display' : 'inline-block',
            'text-align' : 'center',
            'padding'   : '3px',
        },
        proprio_a : {
            'text-decoration': 'underline',
            'font-size': '14px'
        },

        more: {
            'bottom' : '2px',
            'color': '#16212c',
            'font-weight': 'bold',
            'position' : 'fixed',
        },
        more_icone:{
            'vertical-align':'middle',
            'display': "inline-block"
        }
    },

    loadJSON : function(path, successCallback) {
	    if (window.fetch) {
        fetch(path)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    error();
                }
            })
            .then(data => {
                self.data = data
                // console.log('data:', data)
                successCallback(data);
            })
        } else {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        if (success) {
                            success(JSON.parse(xhr.responseText));
                        }
                    } else {
                        if (error)
                            error(xhr);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    },

    removeAfterLastSlash: function(url){
        if(url.lastIndexOf('/') !== -1) {
            return url.substring(0, url.lastIndexOf('/'));
        }
        else {
            return url;
        }
    },

    cleanStringForSearch: function(str) { // remove the last slash at the end of the string
        str = Possedex.url_cleaner(str);
        str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        str = str.replace(/\W+/g, '-');
        return str.toLowerCase();
    },

    url_cleaner : function(url){
        url = url
            .replace("http://", "")
            .replace("https://", "")
            .replace('www.', "")
            .replace("\n", "");
        if(url.indexOf('/') === -1) {
            return url.toLowerCase();
        } else {
            return url.substring(0, url.indexOf('/')).toLowerCase();
        }
    },

    extractUrlsFromRaw : function(raw_sources) {
        const sources = [];

        // Markdown style
        var match = this.regex_url_markdown.exec(raw_sources);
        while (match != null) {
            sources.push({
                "url"   : match[2],
                "title" : match[1]
            });
            match = this.regex_url_markdown.exec(raw_sources);
        }

        // URL toute seule
        match = this.regex_url_seule.exec(raw_sources);
        while (match != null) {
            sources.push({
                "url"   : match[1],
                "title" : match[2]
            });
            match = this.regex_url_seule.exec(raw_sources);
        }

        return sources;
    },

    getAllChildrenForEntity: function(entity, medias = []) {
        for(let item_index in entity.possessions) {
            let item = entity.possessions[item_index];
            let childId = Possedex.getEntityIdFromNom(item.nom);
            if (!childId) {
                // console && console.error("no child found for item=", item);
                continue;
            }
            let childEntity = Possedex.data.objets[childId]
            if (childEntity && childEntity.type !== 3) {
                medias = Possedex.getAllChildrenForEntity(childEntity, medias);
            } else {
                medias.push(childEntity);
            }
        }
        return medias;
    },

    /** Boucle récursive pour récupérer le propriétaire de l'entité, puis
     * son propriétaire à elle, … jusqu'au bout
     *
     **/
    getAllParentsForEntity: function(entity, proprios = []) {
        if (3 <= _debug) {
            console && console.group("getAllParentsForEntity " + entity.nom);
        }
        for (let item_index in entity.est_possede) {
            let item = entity.est_possede[item_index];
            let parentId = Possedex.getEntityIdFromNom(item.nom);
            let parentEntity = Possedex.data.objets[parentId]
            if (parentEntity.type != 1) {
                Possedex.getAllParentsForEntity(parentEntity, proprios);

            } else {
                proprios.push(parentEntity);
            }
        }
        if (3 <= _debug) {
            console && console.log(proprios);
            console && console.groupEnd();
        }
        return proprios;
    },

    getEntityIdFromNom: function(str) {
        if ("" === str) {
            if (_debug) {
                console && console.warn("getEntityIdFromNom(empty string)");
            }
            return false;
        }

        str = Possedex.url_cleaner(str);
        // TODO: build data.slug[str]
        // 1st look, check url, exact match
        if (Possedex.data.urls.hasOwnProperty(str)) {
            return Possedex.data.urls[str];
        } else {
            const cleanStr = Possedex.cleanStringForSearch(str);
            if ("" === cleanStr) {
                if (_debug) {
                    console && console.warn("getEntityIdFromNom(empty string)");
                }
                return false;
            }

            // 2nd look, check regex after removing accents
            for (let idEntity in Possedex.data.objets) {
                if (Possedex.data.objets[idEntity].slug === cleanStr) {
                    return idEntity;
                }
            }

            var regex = new RegExp("^"+cleanStr, 'i');
            // 3rd look, check partial match starting with
            for(let idEntity in Possedex.data.objets) {
                if (regex.test(Possedex.data.objets[idEntity].slug)) {
                    return idEntity;
               }
            }

            // 4th look, check partial match «begin of word»
            regex = new RegExp("\\b"+cleanStr, 'i');
            // 3rd look, check partial match starting with
            for (let idEntity in Possedex.data.objets) {
                if (regex.test(Possedex.data.objets[idEntity].slug)) {
                    return idEntity;
                }
            }

            return false;
        }
    },

    youtubeChannel: function(url) {
        var elms = url.split('/');
        if(elms.length > 2){
            return elms[0] + '/' + elms[1] + "/" + elms[2];
        }
        else{
            return url;
        }
    },

    debunkSite: function(url, $next){


        // infosToGet in extension
        if (3 <= _debug) {
            console && console.log("startDebunkSite");
        }

        if (url === "") {
            if (_debug) {
                console && console.warn("url is empty : nothing to search");
            }
            return $next(null);
        }

        const entity_id = Possedex.getEntityIdFromNom(url)

        if (false === entity_id) {
            $next(null);
            return;
        }


        Possedex.current_entity = Possedex.data.objets[entity_id];

        if (Possedex.current_entity.hasOwnProperty('est_possede')) {
            Possedex.current_entity.proprietaires = [];
            Possedex.getAllParentsForEntity(Possedex.current_entity, Possedex.current_entity.proprietaires);

            for(let j in Possedex.current_entity.proprietaires){
                /*
                current_entity.proprietaires[j].medias = Possedex.getAllChildrenForEntity(entityP);
                */
                var entityP_id = Possedex.getEntityIdFromNom(Possedex.current_entity.proprietaires[j].nom);
                var entityP = Possedex.data.objets[entityP_id];
                var medias_entity = Possedex.getAllChildrenForEntity(entityP);
                Possedex.current_entity.proprietaires[j].medias = medias_entity.map(a => a.nom);
            }
        }


        Possedex.formatSources(Possedex.current_entity);
        // updated_human  = current_entity.possedex.updated.toLocaleString('fr');

        $next(Possedex.current_entity);
    },

    /**
     * create entity.sources = [{url, title}] from entity.possedex.sources
     */
    formatSources : function(entity) {

        entity.sources = [];

        // Récupération des sources (du googledoc)
        var raw_sources = entity.possedex.sources;                // Nos sources (urls séparés par virgule et/ou espace)

        if (3 <= _debug) {
            console && console.info("sources avant markdown", raw_sources);
        }
        // Markdown style
        var regex = new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm);
        var match = regex.exec(raw_sources);
        while (match != null) {
            var title = match[1];
            var url = match[2];
            entity.sources.push({"url": match[2], "title": match[1]});
            match = regex.exec(raw_sources);
        }

        if (3 <= _debug) {
            console && console.log("sources apres markdown", entity.sources);
        }

        // URL toute seule
        match = Possedex.regex_url_seule.exec(raw_sources);
        while (match != null) {
            entity.sources.push({
                "url": match[1],
                "title": match[2]
            });
            match = regex.exec(raw_sources);
        }

        if (3 <= _debug) {
            console && console.log("sources apres urls simples", entity.sources);
        }
        return entity.sources;
    },


    // sendToOutput : function(entity) {
    //     // console && console.log("send to output (possedex class)");
    //     $("#result").html('<div id="infos">');
    //     $("#infos").append("<label>"+entity.typeLibelle+"</label>");
    //     $("#infos").append("<p>"
    //         //+entity.nom
    //         +' <a class="detail-media" href="'+ document.location.protocol +'//'+DOMAIN+'#'+entity.nom+'">'
    //         + entity.nom
    //         + '</a>'
    //         +"</p>");

    //     $("#infos").append("<label>Site(s)</label>");
    //     var urls = "";
    //     for (let url_id in entity.urls) {
    //         urls += ' <a target="_blank" href="' + document.location.protocol + '//' +entity.urls[url_id]+'">'
    //             + entity.urls[url_id] + '</a>'
    //     }
    //     $("#infos").append("<p>"
    //         //+entity.nom
    //         + urls
    //         +"</p>");
    //     // $("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
    //     // $("#result").append("<label>Classement Possedex</label><p>"+messages[classement]+"</p>");
    //     // $("#result").append("<label>Description</label><p>"+notule+"</p>");
    //     // $("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");
    //     if (entity.hasOwnProperty('est_possede')) {
    //         const proprietaires = []
    //         entity.est_possede.forEach(function(el, i) {
    //             proprietaires.push(
    //                 ' <a class="detail-owner" href="' + document.location.protocol + '//' +DOMAIN+'#'+el.nom+'">'
    //                 +el.nom
    //                 +'</a>'
    //                 + ' ('+el.valeur
    //                 +(parseInt(el.valeur)?'%':'')
    //                 +')'
    //                 //+ " (" + fortunes1 + ")"
    //             );
    //         })
    //         if (proprietaires.length) {
    //             $("#result").append("<label>Propriétaires</label><p>"+proprietaires+"</p>");
    //         }
    //     }

    //     if (entity.hasOwnProperty('possessions')) {
    //         const possessions = []
    //         entity.possessions.forEach(function(el, i) {
    //             possessions.push(
    //                 ' <a class="detail-owner" href="' + document.location.protocol + '//' +DOMAIN+'#'+el.nom+'">'
    //                 +el.nom
    //                 +'</a>'
    //                 + ' ('+el.valeur+'%)'
    //                 //+ " (" + fortunes1 + ")"
    //             );
    //         })
    //         if (possessions.length) {
    //             $("#result").append("<label>Possède ou contrôle</label><p>"+possessions.join(", ")+"</p>");
    //         }
    //     }

    //     if (entity.possedex.influences && entity.possedex.influences.length) {
    //         $("#result").append("<label>Intérêts</label><p>"+entity.possedex.influences+"</p>");
    //     }
    //     if (entity.possedex.marques && entity.possedex.marques.length) {
    //         $("#result").append("<label>Marques</label><p>"+entity.possedex.marques+"</p>");
    //     }
    //     if (entity.possedex.subventions) {
    //         $("#result").append("<label>Subventions publiques</label><p>"+entity.possedex.subventions+"</p>");
    //         //console && console.log('subventions    =',entity.possedex.subventions    );
    //     }

    //     // console && console.log("type 1");
    //     // console && console.log(entity);
    //     const medias = [];
    //     Possedex.getAllChildrenForEntity(entity, medias);
    //     console && console.log("les enfants");
    //     console && console.log(medias);

    //     const proprios = Possedex.getAllParentsForEntity(entity);
    //     console && console.info("les parents");
    //     console && console.info(proprios);

    //     if (proprios.length) {
    //         const proprios_display = []
    //         proprios.forEach(function(el, i) {
    //             proprios_display.push(
    //                 ' <a class="detail-owner" href="' + document.location.protocol + '//' +DOMAIN+'#'+el.nom+'">'
    //                 +el.nom
    //                 +'</a>'
    //                 +'<p><small class="text-muted">Secteur d\'activité: '
    //                 + el.possedex.activite
    //                 +'</small></p>'
    //                 +'</div>'
    //             )
    //             ;
    //         })
    //         $("#result").append("<label>Au bout de la chaîne alimentaire…</label><p>"
    //             +proprios_display.join(", ")
    //             +"</p>");
    //     }

    //     if (medias.length) {
    //         if (medias.length == 1) {
    //             var medias_title = "A de l'influence dans ce média";
    //         } else {
    //             var medias_title = "A de l'influence dans ces médias";
    //         }
    //         const medias_display = []
    //         medias.forEach(function(el, i) {
    //             medias_display.push(
    //                 ' <a class="detail-owner" href="' + document.location.protocol + '//' +DOMAIN+'#'+el.nom+'">'
    //                 +el.nom
    //                 +'</a>'
    //             )
    //             ;
    //         })
    //         $("#result").append("<label>"+medias_title+"</label><p>"
    //             +medias_display.join(", ")
    //             +"</p>");
    //     }

    //     //if (true || activite.length) {}
    //     // @TODO neto
    //     console && console.info("activite");
    //     if (entity.possedex.activite) {
    //         $("#result").append("<label style='color:red'>Et a comme potentiels conflits d'intérêts…</label><p >"
    //             +entity.possedex.activite
    //             +"</p>");
    //     }
    //     else {
    //         // $("#result").append("Aucune activité ailleurs ? oO");
    //         // console && console.log(entity);
    //         // console && console.log(entity.nom);
    //         // console && console.log(entity.possedex);
    //         // console && console.log(entity['possedex']);
    //     }


    //     //$("#result").append(sources);
    //     //$("#result").append("<label>Dernière mise à jour</label><p>"
    //     //    + new Date(data.proprietaires[nom].updated).toLocaleString()
    //     //    +"</p>");
    // }

    // RIEN
    rien : function() {
    }
}

