import React from 'react';

interface SharedSvgProps {
    id: string
}

const SharedSvgSelector = ({id}: SharedSvgProps) => {
    switch (id) {
        case 'header-logo':
            return (<svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                    <rect width="65" height="65" fill="url(#pattern0)"/>
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_67_2" transform="scale(0.00195312)"/>
                        </pattern>
                        <image id="image0_67_2" width="512" height="512"
                               xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N15mF1VnS/879p7n7lO1am5UqnKQAYSkpAAQcKgRpGpZdK340ALjt2ICkr326Pd6vW59/bb7X2bQbtB2+5WEFBAlBYEUQQ1ECAhQAKZk6pUJTUP59SZh73X/SMJBDLVcM5Z65z9/TxPP09Tw95fK1V7/fbaa/8WQERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERDMiin3AD37wuvqcx3OukM4SKcQiA7JVOrIGQniKfS4iIqKqI2VeGCLhQAwKYJeE2OnN5zc+/vj948U8TVEKgMuu+uQyaTifgMClkFgFwCjGcYmIiAgAYAN4FQJPmdL50ROP3rdtpgecdgGwdu1ay1M752NCyK8AOGemQYiIiGjSNgmI22q96Z889NBD9nQOMJ0CQFx69SeuA8Q3IXDadE5KRERERbEHEv/w1H/f++OpfuOUCoDLr/7E6bYQdwtg7VRPRERERKUhIJ527MJNv37s/t2T/55Juuza66+XEv8GoGZa6YiIiKiUEpDy80/994/um8wXn7IAWLdunRnLBr4NIW+aeTYiIiIqJSnEdy5cddqXv/GNbzgn+7qTFgDr1q3zRrOBe4WQHyluPCIiIiqhn+di5sefffYHmRN9gXmiT6xbt86M5v0/EcAflyYbERERlcgS0y9Xds5qeKi7u/u4MwEnel9fRHOBfxcSHy5hOCIiIiqdq3x1c+460SePOwNw6TXX3yKAvy1dJiIiIiqDsxcsPXNo744tm975iWPWAFxy9fWrhcB6AL6yRCMiIqJSyjhSXPCb/77nlaM/+LZHAGvXrrUE8H1w8CciIqoWfkPgh2vXrrWO/uDbCgBvXcdXILCyvLmIiIiotOQKT23HF4/+yJuPANZe+6mIV9r7AdSWPRcRERGV2riZc+Y98cR9E8BRMwAeODeDgz8REVG1qrc9xpuzAAIArrjiZp/tifZCoFldLiIiIiqxoTpvpvOhhx7KGQDg+Mav5OBPRERU9VomMoErgMOPACTE9WrzEBERUTk4prwBAMS6deu8sZx/DEBIcSYiIiIqvcRoa6DBmMj5zgMHfyIiIreoaRxMnWtIKS5SnYSIiIjKRwDvNgB5huogREREVD5SYKkhDXG66iBERERURtI43RAS7apzEBERUTnJdgMQNapjEBERUVnVGoBkAUBEROQuYQOAqToFERERlZVpnPpriIiIqNqwACAiInIhFgBEREQuxAKAiIjIhVgAEBERuRALACIiIhdiAUBERORCluoAxWAHBXJ1QKEGcCxASEAUACsBeKMSZkZ1QjVMA2hvlmhvAmqDgN8LZHJAKgv0jwAHhgVyedUp1QhBYI4AZgsDPgBeCGQgMSIlDkiJfkjVEYmISqpiC4BsMxA/TSA9WyAfPtlXCnhiQOigRM0ewDte3Rd2nwc4b5nEhWcCy+ZJBPwn/tpcXmJnD/DCGwLrXwMSaVG+oAq0CYGLhYHzhYkFQpx0+msMEpsdB7+VNjZLyXKAiKqOuPSa6yvq2paaLTC+Esg2T2+wCgwA9a9K+Acr6n/2Kfk8wJUXSVx5gURtaOrfn80Dv35J4JFnBWLJ4udTaY4QuF5YeLdhYDq/NQcg8WOngN84DgsBIqoaFVMA2AGBkTVAck4R7lIlULMPaNzowMzO/HCqnbVI4sYPSTRHZn6sZBr44RMCT2+q/NkAC8AnDRMfNqyiTHVtlw7+xS6gh2UAEVUBc8GSld9QHeJUMq0CA5cKZJuKNCgJINcAJOcJBAYlzHRxDltuQgDXXergxmuBUKA4x/R6gHOXHlo78MpOAdspznHLrQkC/2h68B7DLNpK12YhcKkwMQiJbhYBRFThtC8AUp0CA+8XcLzFP7bjBRLzBXwjgCdR/OOXkmEAN/+xxBXnHyoEim1uK3DGfIkNbwgUCsU/fil1QOBblgdzRPFfcrEEcKFhIgVgu2QRQESVS+vXANNtwOB7BWQJ9yt0vMDgxQKZ5tKdo9iEAG68xsF7zyrtALR0HvC310t4PSU9TVE1CYH/bXnQMq2n/ZMjANxoWLhGcCNNIqpc2hYAhRAwuNYo6eB/hGMBg+8TKBRpGr3UPniBxAfOLc+5ls2X+MyVlXGnawH4e8OD1hIO/ke70TSxvASzDERE5aDl1UsCGHqPAcdXvnPaAYGR8/Vf+Da3Dbj+8vIOyJecK3HeMv2LgE8aJpaW4nnICZgQ+BvTgwqpG4mI3kbLAiCxSCDTUv7zpjoFknPKf97JEgL402skLAUzz5+5EvCVYB1GscwVAh82yt/WohnA9WbFttMgIhfTrwAQQHSlutOPnyW0Xd999mKJpXPVpGuqk7jsXbr+ZIBPiOK86jcdVwsTTWWceSAiKgbtCoDEfCAfUncxzUUE0rOVnf6krrpI7QB85YUShna/MYc6/L1bYTAPgKu4IJCIKox2l/P4QvV3UokF6jO8U3MEWH6a2gyNdcDKBfrNAlwsptfhr5g+MM0ug0REqmhVADgegUyb+stoqkNAt6v56qWled9/qs5ZqjrBsS7QYCV+EwQW6fAPREQ0SeqvnEfJtAJSg2uo4wGyTapTvN2y+Xrcea84TY8cR4QgcJoGBQAAnKlJDiKiydDqipWrV53gLbmIBpXIUea26jHwzmoCPJYeWYBDq/91+SWep00SIqJT0+qKVahRneAteY2yAEBLo+oEh5gG0KRRcTRLdYCjtPMRABFVEK0KAMerzwW0FHsPTJfPA1ga/UuFytig6VRCGg26QW1fICUiOpZGwwoghUYXUI1+MoZmb5gZpj7/TqZGqzU9GmUhIjoVjYY5wNBo1zmR1+dins2pTvB2maw+P5uMRnfdKdUBiIimQKsCwNToCmqm9BlYHAeIarRd8XhcdYK3jGq0Ja9OWYiITkWrAsAzoc8F1DuhOsHbHRzW4657IikQ16hQ69FoBqBXp0dYRESnoFUB4B9SneAQAcA/otfFfOd+1QkO2bFfr5/LgJQY1aQI2ObokYOIaDK0KgA8E4ClwfSyb0TCyKhO8Xav7tZjBkCXHEd7xXFUR0AewBapPgcR0WRpVQAAQLhL/V1UaJ/qBMfa1g2MxNQOvrYDvPC6fgXAMxoMvC85DpKazEQQEU2GdgVAzS5A5XVUFIDwPv0u5FICT72kNsPzWwViSbUZjmezdHBA8eD7C2krPT8R0VRpVwB4khLhPeou5nU7JIysstOf1BMbBJJpNed2HODhZ/S7+wcAB8CPHXXvkG6TDl7RYBaCiGgqtCsAAKDhFcBQ8O67lQYiW8p/3slKZYD7nlIzCD/xgsABTRZpHs9vHAfbFbyGJwHcrbD4ICKaLi0LADMt0fRime+oJND0nISR12/6/2hPvSSwZU95i4D+EeD+X+t593+EBPAvdh6ZMv/z/cSxsZPv/xNRBdKyAACAmn1A7c7yXVgjWyWCB/W/kEsJ3PGgwHC0POfLZIH/c7+BjKaPRY7WA4nbnULZVgO8Ih3c4/DZPxFVJm0LAABofFEiVIb3zsO7JRpe1X/wPyKaAL75X0bJuwPm8sA/3SfQPVDa8xTTM9LG98owJb9bSnzTycPmyn8iqlBaFwBCAq2/lwjvLt1FNvKGRPMGqfTNg+noGwa++l0Dg2OlmZpPpg8VGeV+3FAMjzg27rALJRucX5EO/srJQaNu0UREU2YuWLLyG6pDnJQEQr2AlZZIt4uilSxGDmh+TqJuW+VexRNp4NlXBNqbgI6W4h13dy/wjf8U2D9QeYP/Ebsh8ZqUONswESrSMR0ceuZ/m2NDs/2ZiIimTFx6zfUVMwIWwsDoaoFkp8B0d14VAEL7JBo3SZiKXqkrhfOWSXzqComWhukfYyIJPPi0wK9eEtCguV5RBABcb1q4WpjwzOA426SDf3MK2M0Ff0RUJSqqADgi1wBElwqk5go4k7yqGzmgpkuibruEJ1bafKqYBnDRSolLzpVYMhcQkyyS9g8I/PZl4DcbBTJVemvbCIGrDRMfMAw0TbJ6zAN4STr4hWPzPX8iqjoVWQAcIU0g0wJkWgVydYBdA9geASElRF7AkwQ8UYnAgIRvGBAuuoY31AIrFkgs6pBobwJqggI1QYlURiCVkegbEdjXB2zdK9A/ojpt+QgAi4TAmcLAfAjMFgb8kPAIgbQERuDggATekBJbJNv7ElH1qugCgIiIiKZH67cAiIiIqDRYABAREbkQCwAiIiIXYgFARETkQiwAiIiIXIgFABERkQuxACAiInIhFgBEREQuxAKAiIjIhVgAEBERuRALACIiIhdiAUBERORCLACIiIhciAUAERGRC7EAICIiciEWAERERC7EAoCIiMiFWAAQERG5EAsAIiIiF2IBQERE5EIsAIiIiFyIBQAREZELsQAgIiJyIRYARERELsQCgIiIyIVYABAREbkQCwAiIiIXYgFARETkQiwAiIiIXIgFABERkQuxACAiInIhFgBEREQuxAKAiIjIhVgAEBERuZDY+OrrUnUIIiIiKi8xEo2xACAiInIZPgIgIiJyIRYARERELsQCgIiIyIVYABAREbkQCwAiIiIXYgFARETkQiwAiIiIXIgFABERkQuxACAiInIhFgBEREQuxAKAiIjIhVgAEBERuRALACIiIhdiAUBERORCLACIiIhciAUAERGRC7EAICIiciEWAERERC7EAoCIiMiFWAAQERG5EAsAIiIiF2IBQERE5EIsAIiIiFyIBQAREZELsQAgIiJyIRYARERELsQCgIiIyIVYABAREbkQCwAiIiIXYgFARETkQiwAiIiIXIgFABERkQuxACAiInIhS3WAybALBUwkU8jn87ALBdVxiEpKCAHLsuD3+RAMBWEIoTrStDhSIplMIZvNolAoQEqpOhJRSZmWBY/Hg9pQEKal//CqdcJMJoO+gSEkEklePMiVTNNAY0MDWpqbYJqVMWFn2zaGhkcwOjoO23FUxyEqOyEEasIhzGptRcDvUx3nhMRINKblyDo2FsWBvn4O/EQAPJYH8+d1IhDwq45yUulMFt3dPcjl86qjECknhEBbawtamhtVRzkuLW8phoZH0Xuwj4M/0WH5Qh5793Ujk82qjnJCmWwGe/Z2cfAnOkxKif6BQQwNj6iOclzaFQDJZBIDA4OqYxBpx3YcdHX3Qmo4rS4dB13dB+BomI1ItYGBISSTSdUxjqFdAXCwfxC87yc6vlwuh5GxcdUxjjEyNo5cLqc6BpGWJIC+gSHVMY6hVQGQTmeQTmdUxyDS2uhYVHWEY4xqWJQQ6SSVSiOT0Wt806oAmIgnVEcg0l42m0U2p89z9lwuh2yWd/9EpxKb0GuM06oAyGl0USPSWV6j6XadihEineU1WyCrVQHgOLbqCEQVwdbob4V/t0STY9t6/a1oVQBYHq37EhFpw2N5VEd4k1UBHc+IdODR7G9FqwJA545JRLowhIBPo78Vv89fse2KicrJr1kjL60KgNpwGIIXEqKTqqkJwTT0+dM1TQOhmpDqGERaE0KgNhxWHeNt9LmK4NBUYkNDRHUMIq01tzSpjnCMVg0zEemksaEelmWqjvE2WhUAADCrpRlejz7PN4l00thQj5pgUHWMY4SCQTTUs3gnOh6vx4PWlmbVMY6hXQFgWhbmz+vUrlIiUi1cE8LsWa2qY5xQR3sbavgogOhtLMvUdkzTdjfAbC6Pnt4DSKXSqqMQKSWEQHNjA9raWrRfIyOlRH//IEbGxrmZF7leKBjEnM7Z8Hr1nNXWtgA4IjYxgfHxCcQTcTiO1lGJisrr8aC2Noymxnr4fPqs+p+MTCaL0bExTEwkuDsguYphGAjX1KC+vhZ1tbWq45yU9gXA0Qq2DcfmbmNU/TweE0Jo94RuWqR0kM/r1QCFqBQM04Bl6jfVfyJ6dSU4Bcs0gQr64RIRIIQBr7c6ihmiasK/SiIiIhdiAUBERORCLACIiIhciAUAERGRC7EAICIiciEWAERERC7EAoCIiMiFWAAQERG5EAsAIiIiF2IBQERE5EIsAIiIiFyIBQAREZELsQAgIiJyIRYARERELsQCgIiIyIVYABAREbkQCwAiIiIXYgFARETkQiwAiIiIXIgFABERkQuxACAiInIhFgBEREQuxAKAiIjIhVgAEBERuZClOsBkSCmRyWSRz+dRKNiq4xCVlgAsy4Lf54PX61GdZkZyuTwy2SwKhQIgVadxOQF4TAs+vxder1d1GtKA1gVAoVDA4PAIouMxFGwO/OQ+fp8fTc31aIhEIIRQHWdSpJQYH49heGQUmWxWdRw6Dp/Pi6aGBjQ01sOokN8rKj4xEo1pWZdPxOPo6TkI23FURyFSLhgMYN7cDngsvWcE8vkCuvb3IJ3OqI5Ck+D3+TF/XgdnBFxKywIgGo2hp/cgZwyJjuLxWFi0cL62RUC+kMfuPV3I5wuqo9AUWJaJRQvmswhwIe0WAaYzWfQc7OfgT/QO+XwB3fsPaPm3IaVEd/cBDv4VqFCw0bW/F5Kzra6jXQHQ3z/AX0SiE0il0ohGo6pjHGM8GkUqnVYdg6Ypk8liZHxcdQwqM60KgGw2h3giqToGkdaGR8ZURzjGyCgHj0o3ouHvFZWWVgXARDyuOgKR9tLpDPKFvOoYb8oX8lz0VwWOvLJJ7qFVAcBfPqLJyWVzqiO8KZvVpxihmcnyGuwqWhUAjs1n/0SToVNfDNvmwr9qodPvFZWeVgWAaZmqIxBVBMvUp4eXZemThWbGw39LV9GqAPD7fKojEGlPCAGfRn8rPq8X7CVXHXgNdhetCoDa2rDqCETaCwYCsDSaLbMsC8FQUHUMmqFDe0+wGZCbaFUAeD0eROpqVccg0lpLS6PqCMdobmpQHYFmqLlZv98rKi2tCgAAmNXWCtPU5+6GSCe14RrUhvWbKaurrUU4XKM6Bk1TKBREfaROdQwqM+0KAK/Xg7lzOiAM7aIRKeX3+TCnc7bqGCc0t3M2/H4+Q640Pq8H8zo7Kma3SSoeLTcDAg61PN3f04sce4sToTYcxpzO2TBNvQtj27bRc6APExNs6lUJamqCmNfZAZOr/11J2wIAAKR0MDwyhvHxCWSy7DRG7iIMA+FQEE2NDRU3vT4RT2BkdAzJRBKO1PYS40pCCIRCQTQ11qOulmuu3EzrAuBohXwBuXweNjcKoionAFgeE16PF0aFPwpzHAe5fA6FvK3lLoZuY1mHfq90n0nSkUhnYHUfgNk/BHNwCCKRhEhnIfI5yGAA0rLgNNbDbm6A3d6GwtwOQPOZlYopAIiIiMrJ7BuA74XN8GzbBWv/QWAKN6DS40Fh/hzkzl6O3OqVcOr1W2TJAoCIiOgIx4HvpVfh/83vYXX1FueYQiC/bDHSl74X+TMWA5osuGQBQEREBMD34isIPPokzMGRkp2jMLcDqY9djfziBSU7x2SxACAiIlczB0cQ+tHD8GzbXbZz5s5dieSffBiOwgW+LACIiMidpIT/6fUIPvw4RL7821o7dbVIfPqjyK9YUvZzAywAiIjIhYzYBEI/eBDeLdvVBhEC6asvQerqy8p+ar3fUSAiIioy3wubEbrvEYhUWnUUQEoEHn0KIpFC8uPXlnWBIAsAIiJyBZFKI3T/z+Db8LLqKMfwP70eAJC87kNlOycLACIiqnqerTtQ84OfwIhOqI5yQv6n18MJ1yB91SVlOR8LACIiqloin0fw4ccP3WFXQFvq4KO/gt05C7lVy0t+Li4CJCKiqmTt7UbN9x+AOVS69/pLQYaCiH79z+E01pf0PGwITURE1cV2EHjiGdT9079V3OAPACKZQvh7902p9fB08BEAERFVDbNvADXfv/9Q7/4KZu3pQuDXv0P6sveV7hwlOzIREVG5SAn/719E8Mc/h8iVv6lPKQR+9iRyy5bA7phVkuNzDQAREVU0YyyKmv94AJ4de1RHKTq7vQ2xr30F0uMp+rG5BoCIiCqWd9NriHz9/1Tl4A8ceqQRePRXJTk2HwEQEVHFMeIJhO55GN7NW1VHKbnAk88if+bSou8gyBkAIiKqKJ6tO1D3jX9xxeAPAJASNf/xY4hMpqiHZQFAREQVQeTyCD3wc9Te/u8wojHVccrKGBlD6Mf/XdRj8hEAERFpr1Kb+hST7w8vIrdiKXLnrCjK8VgAEBGRvmwbwcd/g8AvflPyxjiVIHTvwygsnAenLjzjY/ERABERacnsG0Dd/7wDgUef4uB/2KHFjw8V5VicASAiIr1ICf/T6xF8+DGIfEF1Gu14X30DvvUvInvReTM6DgsAIiLShjEyfqipz669qqNoLXTfz1FYvAB2S9O0j8FHAEREpAXfhk2IfP1bHPwnQeRyqPnPH8/o0UjFzAAUbBv5fB52wQZ7F1M1MwwBy7Tg9VgQRmXX6NJxkMsXULALcBw9/nIFBCyPCY/lgWlW9s+3WhgTCYR++BC8r76uOkpFsXZ3IfCrZ5G+4v3T+/4i5ykq6TgYGY9ifDyKdLq4DRCIdCeEgXA4hOamRtSEgqrjTEkikcLwyCjiiSSk1HPxlgAQDAbRUB9BfX0dhBCqI7mSd8t2hH74IIzohOooFSnw6K+QW74Edmf7lL9X282A0ukM9vf0IlsluzoRzUSkrhadHe0wNJ8RcBwHPQcOIhaLq44yJX6fD/PmdsDn86mO4hoik0HwwV/A/7sXVEepeNPdMEjLAiCRTKGraz8cqV00ImX8fj8WLpgHU9MiwHYc7NnbjUyR25WWi2kaWDB/HgIBv+ooVc/a042a/7gf5tCo6ihVI335+5Bad+WUvke7K0kun8f+/b0c/IneIZPJoKfnoOoYJ9TTe7BiB38AsG0HXft7YBf42lmpiHwewYcfQ93/9x0O/kUW+NWz8Oyc2uJJ7QqA/oFBFGxbdQwiLU3E44hPJFTHOMbERBwTE5U17X88+XwBA8PubTVbSubBftT+rzsReOIZgDd4xSclav7zgSltGKRVAZDLFxDlQhCikxoc0e/OaWhYv0zTNToWhW3ruXCxIjkOAk88g8g3b4fV26c6TVUzRsYRuv/RyX99CbNM2cQEB3+iU0mlUlrNktmFAlLptOoYRSMdBxMJ/WZZKpExMobaf74LwYcfA/hopSx8z70E76Ytk/parQqATDarOgKR9qSUyGb0+VvJ5HKQVTalm63gtQy68G3YhMjXvgXP7n2qo7hOzb0Pw4id+oZaqwLALuhzV0Oks4Ktz91UoQrv7Aq8Fk2bEYsjfOd/oub7D0Bkc6rjuJJIJFHzXz855VoLrRoBGezKRTQplmmqjvAm09TqMlIUlqXPz7eSeDdtQc29D0MkkqqjuJ5n645DGwa9e80Jv0arv1y/16s6AlFF8Pr0+VvxVuHfbTX+byolkc4g+BCb+ugmdP+jKCxeCLv1+BsGaXXLHQ6HVUcg0l4g4IfHmlrHr1Lyeiz4/dXTQU8AqK2pUR2jYni27Ubka9/i4K+hQxsGPXDCDYO0KgD8fh/CNSHVMYi01tTYoDrCMXTMNF2RulpYHq0mR7V0pKlP7b98F8ZYVHUcOgFrTzcCTz573M9pVQAAQPus1orfAY2oVAIBP+ojdapjHKOhPlIVLXQNw0BbW4vqGNpLpdMYfmUrAk/9jk19KkDw0V/BPE4PBu1GWr/fj47ZbapjEGnH8liYN7dTy13rhBCYN7ezou+chRCY2zmbz/9PQkqJoeFR7N3bjYMBP4bXXqA6Ek1GoYCaHz54zKMA7QoAAGiIRDB3TgcMQ78LHZEKfr8fixbMh3eKu32Vk9fjwaLT5iNQgesBTNPE/LmdqK3lOqQTyeby2LdvP/oHBt/cq+WN5acjN69DcTKaDKur95h1GlruBnhEvpDHwOAwYrEJtuYkV/L5vGhubERDQ0TLO//jkVJidGwcwyNjyOX0fg/cMk3URyJoaWniq38nMTYWxcH+ATjHWUwWSaRx1j0PQXDrdu3JmhDG//nvIQ+/RaR1AXCEIyXSqTTy+TwcR/u4RDNmWSa8Xm/Fr67PZLLI5XLaNdYxDANerweBgL9iCisVCoUCeg/0YyJ+8o2eluzuRvvjT5cpFc1E6iNXIX3ZWgAVUgAQEVF5xWJxHOjrm1zxJiXOf/JZBHay7a/unEgtxv/5HwDT0HMNABERqWE7DnoP9qG7p3fyMzdCYMv7LoQTCpY2HM2YEZ2A9/Udh/5/xVmIiEgTyWQKu3bvxdg03utP+r3oufy9JUhFxebbsAkACwAiIteTjoP+gUHs3deN3AwW8+3rbEfirGVFTEal4Nm6A7BtFgBERG6WyWawa28XhoZHUYwFYa9duBp2Q6QIR6JSEZksrO5eFgBERG50qKnPCHbv7kImky3acbOWhX2XvRfg2xVa8+zqYgFAROQ2uVwee7t60D8w9GZTn2LqbW1CdM3ZRT8uFY/ZN8gCgIjITcajUezcvRfJZLKk59m6ejkKLY0lPQdNnznAAoCIyBUKhQK69veip7fvuB39ii1vWtj2wYsBkx0WdWREJ1gAEBFVu3g8gZ179mFi4uQd/YptpC6MkfeeV9Zz0uSIVIYFABFRtTrS1Gdfdw8K+YKSDK+vWIJc5ywl56YTE9ksCwAiomp0qKnPvmk19SkmRwi8cdlayAreKroaSctiAUBEVE2klBgcGsberv3a7MY4XhPEwAfeozoGHc3nZQFARFQtMtksdu3pwsDgMGQJXu+biZ2L5yGz+DTVMegwJxxiAUBEVA2GR8ewa08XMpmM6ijH5QiB195/IWQwoDoKAXCaGlgAEBFVslw+jz379qOvbwCyDK/3zQQ3DNKH3drEAoCIqFKNR6PYuav0TX2Kae+c2Uis4oZBqhXmz2UBQERUaexCAd37D5StqU+xbb3wHDh1YdUxXC2/aD4LACKiSjIRT2DHnn2ITUyojjJtaY8Hez74fm4YpIjd1gKnsZ4FABFRJXAON/XpUtjUi5xbUQAAIABJREFUp5gOtDQhdt5ZqmO4Uu68VQDAAoCISHfbhjP4xeuDypv6FNuWc1fCbm5QHcNdhEB2NQsAIiKtFRyJH78ew1efHsZ9OwqYkD7VkYoqbxrY8UfvBwwOReWSX3467PZWACwAiIi01BPL4y+fGsADW2NwpETWlvjpwSAcVNdz88H6Ooy+d43qGK6RvuSt1zBZABARaUQC+MWuOG791QD2jeff9rmuaB6bU3VqgpXQ1jOXIDenQ3WMqpdfshD5ZYvf/G8WAEREmhhMFvDVp4fw/ZfHUbCP38r38W4bIzJY5mSl5QiBbZddxA2DSkkIpD5y1ds+VFE/bSkd5PO26hhEJSUMwDItCL4i5SrPdCfx3Y1jSBdO3sPfdiR+2uPFZ+dkYInK6wFwImOhEAYufjdmPfmM6ihVKX3ZWhTmvn2WRfsCID6RwFg0ikQiiYLNwZ/cQQDw+ryoDYfR1NgAr9ejOhKVSCxj419fGseLB1OT/p6D8QKej9fhPbXjJUxWfjtPn4/6vfvh371PdZSqYs+ehfS1lx3zcTESjem1ZdRhuXwBPT0HkExN/o+CqBoZQqCpqQFtrS2cFagyL/el8e2XxjCenvrNjQDwZ0uA2Vai+MEUCqcyWH3PTyE03dSo0siaEGJ/dwvs1qZjPqflGoBMNoPde/dx8CcC4EiJoeFRdO3v1W6LV5qeVF7iXzeO4Zu/G57W4A8cWiz40H4TOf0ncqckHvSjlxsGFYdlIX7TDccd/AENC4CCbaO7u7cqOl0RFVM8nsDBvgHVMWiGtg9n8ee/6sdTe2Z+5z6WtvH0WG0RUullz7wOJFcsVR2jokmPB/GbbkB+ycITfo12BcDg4BCyufypv5DIhUbHxpFMcmasEuVtiR++FsXfPT2E/njxbnA29OXQla++jXW2vPtcOLU1qmNUJOn1Iv7lzyJ3il0XtSoACgUbo1XW6pKo2IZGRlVHoCnaH8vhL389gEe2TcApwWOcB7sE0rK6FoqmvR7su/z9qmNUHLulCbGv3oL80kWn/FqtCoCJeJzPOIlOIZ5IVuQWsG7kyENNff78V4PoGi/dzGYy5+AXQzWotqtnT3szJg5vXEOnljt7BWJfuxV2x6xJfb1Wq0fSaa76JDoV6TjIZLIIBgOqo9BJDCYLuGPDGN4YLs917fXhPJZH6nCGL1aW85XLa+9aifP39cIa5szXiUi/H6mPXIXMFFsqazUDUChw4R/RZOQLXCejs2e6k7jll/1lG/yP+Nk+pwo3DLKw64r3ccOgEygsnIfY12+d8uAPaDYDYBim6ghEFcE0tPrTpcNiGRvfeWkMLx1MKzn/kQ2DPtmRg1FFDwQGGurQdtG5aPj9i6qjaEN6PEhfcxnSl7132sWRVlcRdjsjmhz+rejn+d407to4ioms2vUZXdE8NjfUYXWwuhZUbz1rGS7Yux+eg3wV1p49C4k/vQ6FzvYZHUerOZXaMF/5IDoVn8/LAkAjR5r6/NP6YeWD/xHVuGGQLQTeuHwtpKXVfWt5CYHMB96N6Ne+MuPBH9CsAAgE/AgE/KpjEGmtsaFedQQ6bPtwFrc+WZymPsV0ZMOggtTqEj9jY+EQhi6+UHUMJZymBkz81U1IfvxaoEhFkHa/He1tbaojEGnL6/WgiQWAcm819RnEQELPxctHNgyqNtuXLEB24TzVMcoqe8FqRL/5l8gvXlDU42q5GdDg0AgGBodUxyDSimEILFxwGgL+6lrlXWm6Yznc9vwouqP6v4khANy4FGg39ZqhmKm6dAZn//BhiExWdZSScurCSN6w7pQd/aZLywIAAIZHx9DfN1BF61iJps9jeTBvbgff/VfIkRI/3x7H/VtjyDuVc2VqCJj4woIkvNBzpmK6FnX1ovPRp1THKJncOSuQuGEdZE2oZOfQtgAAgFQ6jYGBIcQTSdVRiJQwDIGmhgY0tzTBMvmarCqDyQJu3zCGbWV+r79Yzm/34oqGMdUxiu683z6P0JbtqmMU1XSb+kyH1gXAEflCHolEErlcAY4zva0ziSqJZVnweb0Ih0MQQrulOq7yTHcSd28cQ6ag/aXypD59usB8T1x1jKLy5/NYc+8jMCaq4xFHfukiJD7zMTgNkbKcryIKACKicotmbHznxTFs7FPT1KfYQl4DtyxKIyD0X7swFXP6h7DwJ79QHWNG3mzqc/laQIiynZcFABHROzzXm8bdGjT1KbblzR6sax1H+YaY8li9fhNqN72mOsa02B2zEP/TP5n0Bj7F5OKOCkREb5fMO/jBq1Ht3usvlteH81gWqcOyKtswaMuaVTi/qwfm6LjqKJNnGkhf+l6krr28aO/1TxVnAIiIALw2mMGdL4xiJFXd64x8psDNS3KoFdX1Ct2ssRiW/ugRoAK2yrabG5H43MdRWDhfaQ4WAETkanlb4v7XY/j59glU0Nt9MzI/4sEnO6JVtWEQAKx6eSsa/vCS6hgnJgQy7zkPqY9dA+n1qk7DAoCI3Ks7msdtG0YqoqlPsV19mlV1GwaZUuKChx6Hp29QdZRjOHW1SH5yHXIrz1Ad5U0sAIjIdWxH4tEdldfUp5hMQ+CLS200iZTqKEXVOJHAynt+ChT0aXyUW70Siev/n5I29ZkOFgBE5CqDiQJu3zCKbSPV9Qx8OmaHLXx2zgQsof9z86lYvm03Wp76veoYkAE/ktd9CNkLVquOclx8C4CIXEEC+PWeBL6/eRxZm/c9wFsbBr2ntoJWz0/CtqULUbevB7493coy5JctRuLTH4NTr++GTJwBIKKqF03b+PbGMWw6WB1NfYqpWjcMqk2lcc49Py37hkGqmvpMBwsAIqpqz/WkcPemsapr6lNM1bph0OJ9Pej471+X7XyF+XOQ+NzHYbe1lO2cM8ECgIiqUjLv4Hsvj+PZLm4mNhnVumHQ+U/9AYFtu0p7kiNNfT50BVBBm3ZxDQARVZ3XBg439UlXd1OfYtrQl8OScLjqNgx6de0anNd7EEa8NIWg3d6KxGc/jsK8zpIcv5Q4A0BEVSNnO3jg9QlXNfUppmrdMGhu3xAWPFjkDYM0a+ozHSwAiKgq7BrN4fYXRnFworoGr3Kr1g2Dzv39RoQ3bynKsZyGCBKf+TjySxcW5Xiq8BEAEVW0I0197tsaQ4G3/TNWtRsGXXAW1nT3wBybWffD3OqVSNzwx5ChYJGSqcMZACKqWAcm8rhtwyj2jOVUR6kqPlPgliVZhEV1/VzbRqM440ePAHLqw54MBpD8kw8ju+bsEiRTgwUAEVUcNvUpvWrdMOisTVtQv37jlL4nv/x0JD79UTgRfZv6TAcLACKqKNG0jTtfGsPLfWzqU2pu3zBIejxI/fEHkbn4Iu2b+kwHCwAiqhjP9aRw18YxxHNs6lMO1bphUNNEHGfe88hJNwwqLJiLxGevg93aVMZk5cUCgIi0l8w5+N5mNvVRoWo3DHpjF1p+/YdjP2GaSF95MVJXXgIYRvmDlRHfAiAirb3Sn8G3XxzDaLq62tRWiqrdMOiMxYjs6Ya3q/fNj9ntbUh87joU5s5WmKx8OANARFrK2Q7ueS2Gx3bGq2wZWuWp2g2Dkhmcc89DELn84aY+10J6PapjlQ0LACLSzq7RHG7bMIq+OJv66KIhYOKmBUn4qm3DoP4h1M7rRH7xAtVRyo6PAIhIG2zqo6+xtI3fjtVW1YZBkbpaeM84HfkK2sCnmFgAEJEWemN53PbCKPayqY+2qmXDINOy0Dm7DXW1taqjKKX9I4BMJovxaAyJZBK5fB6SdwVUJMIQ8Ho8CNeEUB+pg8/nUx3JldjUp7KEvAZuXpxGEJX5eKY2XIOOjlnwWO551n8i2hYAtuOgr28A4+NRLgCikhNCoKE+gvZZrTCq/NUfnQynbNz5wgi2DGZVR6EpqMQNgwzDwOxZbWhoiKiOog0tC4B8IY99+3qRyWZURyGXCfh9OG3eXFgePh0rNTb1qWwfXWRWzIZBoWAQczrb4a3QbXtLRbsCQEoHu/d2I53m4E9qBIMBLJw/F4IzASWRzDn47svj+F03m/pUskrYMEgIgdaWJrQ0N0FUYSvfmdLuCjc0PMrBn5RKpdIYGqmelc462dyfwZd+2c/BvwpkbYmHD4bgaPogwO/zY/HC+WhtaebgfwJazXM6joOh4VHVMYgwPDKC5uZGGLxwFAWb+lSnrmger9RHcE5Iny6BAkBjUwPaW1s4i3cKWhUAsXgCjsPngaSebTuIx+Ouf02oGHaOZHHbC6Poj1dXAxk65LH9BcxdGtRiwyCv14M5He0IhUKqo1QErcqjdIrbe5I+Uik+ipqJgiPx49dj+JvfDHHwr2K2I/HTHi8KUu1wUl9fh9MXLeDgPwVazQDkC5X5XilVJ/4+Tl9vLI9/2TCKfeP6LhCj4lG5YZBlWejsmIXacLjs5650WhUAhl4TEuRyhuDv41SxqY97Pd2Tx8KlNWXdMKiuLoyO9nZYljtb+c6UVgWAx6tVHHI5y+Lv41QMJW3c+eIItrKpjytJAA92m/jCAgveEm8YZBoG2tnUZ8a0usUJ1/DZDekjHObv42Q915PCrU/2c/B3uSMbBpVSKBTE4kWncfAvAq1ucYLBILxeD3I5PnsltXw+L4LBoOoY2pvI2PjXjeN44YD6FeCkh+f7cji9BBsGCcNAW0szmpsbNe08UHm0mgEQQqCtrVV1DCLMamvhReYUNvdn8OUnBzj40zEe7BJIoXib7QT8fixaMB8tHPyLSqsZAACor6tFsqEeo2P6NJYgd2lsrOf7/yeRtSXufS2KX+ys7C1hqXSSOQePDdbMeMMgIQSamxrQ2trCplwloF0BAACz29sgITE2FlUdhVymsaEes2e1qY6hrR0jWdzOpj40Ca8P57E8UoczprlhkM/rQWfnbIT4KK5ktNsM6GjjsQkMDAwhl+O7xFRaPp8Xs1pbUVfHd4mPp+BIPLxtAj95fQKO1PaSQZqZ7oZBDQ0RzJ7Vxq25S0zrAgAApJRIpVKIJ5LI5wpwJFsFU3EYwoDX50GoJoRQIMANQ06gJ5bHbRtGsG+ci3Np6uZHPPhkRxTGJHaBsCwLnbNnoba2ugrxgm0jkUwinc3CMk2Eg0H4/X7VsfQvAIhIDQngsV1x/ODVKAps6kMzcM18zyk3DIrU1WL27FmwzOpp6jMajWL7nj0YGB6G7dhv+1ykthYL5szFaZ2dymY6WAAQ0TGGkjZuf2EUbwxxPwSaOdMQ+NISG43GsW+MmKaB9rbqaurjOA42v/E69vb0nPJra8NhXHTOaoQV7GHAAoCI3uaZ7iS+u3EM6QIvDVQ8HWELn5kzAUu89Rg3XBNCZ8dseDxarkefFkdKrN+0Ef1DQ5P+Hq/Hg/dfcAHqasr76IMrLIgIABDL2PjffxjB7RtGOfhT0R2IF/B8og4AIISBWW2tmD9/blUN/gCwZceOKQ3+AJDL5/GHjRtRKJT37RoWAESEFw+k8KUnBvAim/pQCf22J48Jqx6nL6rOpj7xZBK7u/ZN63uTqRR27Ntb5EQnV12lFxFNSSov8V+vjuOpPeXbwY3cyTQErlkSxvmn18Eyqm3oP2R3d9eMXpPd3d2NMxYuKtuiQBYARC61fTiLO15kUx8qvdYaC7euacTSZp/qKCV1cHBwRt+fy+cxMj6OlsbGIiU6ORYARC5TsCXuez2Gn2+Ps6kPlZQAcMnCGnzu7Hr4zOq86z/Ctm2k0ukZH2cikWABQETFtz+Ww20bRtHFpj5UYhG/iZvf1YDVswOqo5RFpkgda7O58m2pzQKAyAUcCTy+m019qDwu7Azg8+c2otbnnnXmskizacU6zmSwACCqcoPJAu7YMIY3htnUh0or5DHwqVURXLqwRnUUmgQWAERV7JnuJO7eOIYM3+unEjuz1Y8vr2lEU7B6WvlWOxYARFUolrHxnZfG8NLBmS9KIjoZjylw3fI6XLu0FlX6dl/VYgFAVGWe703jro2jmMhy50wqrXl1Xtx6QSPmRTyqo9A0sAAgqhJs6kPlYgiBa5eGcd2KOnh421+xWAAQVYHtw1nc/sIoBhJs6kOl1Rqy8JXzG3BGs/r97GlmWAAQVbC8LXH/6zH8fPsEHK7zoxJbOz+Em1Y3wG/xrr8asAAgqlDdsRxue34U3VE29aHSivhNfPFdDXiXS5r6uAULAKIK40iJn2+P4/6tMeR5208ldkFnADe5rKmPW7AAIKogg8kCbt8whm1s6kMlFvQIfHpVPZv6VDEWAEQVgk19qFyWNvvwlTWNaKvhEFHN+K9LpLloxsZ3XhzDxj429aHSYlMfd2EBQKSx53pSuHvTGJv6UMnNr/fg1vMbMbfOqzoKlQkLACINJfMOfvBqlE19qOQMAXxwcRifWhmBZfK2301YABBp5rXBDO58YRQjKVt1FKpyrSELXz6/AcvY1MeVWAAQaYJNfaic2NSHtC8ACraN2MQEEokkCrkCbMlnoaXmsSz4fT7U1tYgFAqpjuMK3dE8btswwqY+VHJs6kNHaFsASCkxNDyKoeEROA4H/XJKA5iIJzA0MopgMIDZ7W0IBnixKAXbkXh0B5v6UHmwqQ8dTcsCwHYc7N/fi3giqTqK66VSaezZtx+d7bNQX1+nOk5VGUwUcPuGUWwbyaqOQlWOTX3oeLQrACSAnt6DHPw1Ih0HvQcOwjJNhGt5AZkpCeDXexL4/uZxZG3e9VNpndnqx5fXNKIpaKqOQprRrgAYHRnDxERcdQx6Bwlg/8E+LK1ZCNPg9OF0RdM2vr1xDJsOsqkPlRab+tCpaFUASMfB4PCI6hh0AnahgJGRMbS2NKmOUpHY1IfKZV7Eg1vPb8K8iEd1FNKYVgVAPJFEoVBQHYNOIhqLsQCYIjb1oXIxDYFrloRx3Yo6eHjbT6egVQGQTHFaVHeZTBZ2oQDT0upXR1uvDRxu6pNmUx8qrdYaC185vxFnNPlUR6EKodVVPJfnO9CVIJcvIMAC4KRytoMHXp9gUx8qOQHgkoU1+OxZ9WzqQ1Oi1VWcv7qVQfAf6qR2j+Zw2wujODjBgpZKK+I3cfO7GrCaTX3elMpk0H3gAPqGBpFMpZDJ8jXbE9GqAPB4uGClEnh4939cR5r63Lc1hgJv+6nELpwTxOdXN7Cpz2FSSmzbsxvb9+yF7fCR22RodSWvCQUxNKw6BZ2M3+fj8//jODCRx20bRrFnLKc6ClW5kMfAp1ZF2NTnKI7j4LnNL6NvcFB1lIqi1ZW8JhSEZVl8E0BjkQi7AR6NTX2onFa2+XHLmkY0BdjU52ibtm7l4D8NWhUAwjDQ2tKEg30DqqPQcViWheamBtUxtBFN27jzpTG83Me3V6i0vKaBjy+vZVOf4+gfHkbXgV7VMSqSVgUAADQ2NiCeSLIboGaEEJjT0Q6DXQABHGrqc9fGMcRzbOpDpbWo0Ytb1zRidi3XSB3Ptt27VEeoWNoVAALAnM7Z3AxII8Iw0Nk+C+Ewnzkmcw6+t3kcz3bxd5NK60hTnz9ZUQeLt/3Hlc6kMTI+rjpGxdKuAAAA0zAwf94cDI+MYmhoBDa3A1YmFApi9qw2BAJ+1VGUe6U/g2+/OIbRNNeoUGl11Hpw6/mNWNjgVR1Fa6PRqOoIFU3LAgA4NOXc0tyExoZ6xCbih9oE5/KwJYuBUrMsC36fD7V1YdQEg6rjKJezHdzzWgyP7YyDy/yolI409fnc2fXwmbzrP5VMlm/dzIS2BcARpmmioT6ChvqI6ijkQrtGc7htwyj64mzqQ6UVCZi45V0NOKedTX0my6jCRyPl7IejfQFApAKb+lA5XTgniJvObUDYy0W2UxEKVN8MZbCM/5tYABC9Q28sj9teGMVeNvWhEgt5DfzZ2fVYOz+kOkpFamqoh2WaKNjV0fnPEAKtjY1lOx8LAKLD2NSHyumsWX7cfF4DGgO8DE+XaZjonNVeNX0A2ltb4eUjAKLyGk7ZuPOFEWwZ5MYhVFpe08ANq+pw5eIwN0ArguWLF6Onvw92hc8CGIaBFacvKes5WQCQ67GpD5XL4sNNfdrZ1KdogoEA1qxahedefll1lBk5Z9ly1NaUt9eKGInGONdJrpTMOfjuy+P4XTeb+lBpsalP6XUfPICNW7bAqbC+MYYQWHXGMiyaN6/s52YBQK60uT+D77CpD5VBZ50Ht65pxAI29Sm5aDyOLdu3oX+4MraVbW5oxKqlS9EQUfOauxiJxhyAj6LIJaSDf988jsd3JdnUh0rKEMDVi2vxiZV18LCpT1klUyn0DQ0hkUwik8tCSj3+2gUAv9+PYCCA9pZWhENK3/6QYiQaSwKovpcpiY4jEN+D14fz+PMX+doVlU5z0MSX1zRhRatPdRSiE0kaABKqUxCVg5WPw5/swepgHy7v4NQ/lcaFc4K4/YpZHPxJbxITFoBRAC2qsxCVkpA2grE3gMN7Sfy/i/rx4nAHxrOcmqXiqPWb+OK59VjTwQlVqgAGxgwI7Fadg6jUAvE9MPNvTXZ5ZRrfWj2hMBFVk7Nn+XHH5W0c/KlySLnLEFLuVJ2DqJQ8uXH4kgeO+fhizyA+sYib/ND0+UyBz51Tj6+tbUFDwFQdh2gKjJ0GgE2qYxCVipA2AtFtwAnW/H+m8yA6QnqsEKbKsqTJhzuumIWr2NGPKpCAs0n0x+PNHtsZBF8FpCoUim6HN33wpF8zKBuw7ndNZUpElc4yBNYtq8VHltXCELxsUkVyvIZoNWaFw8MCeE11GqJis7Kjpxz8AaBVjOGLZ3APADq1OXUefOvSNnxseR0Hf6pkr9TW1o4YACAhHlCdhqiYhFNAKLpt0l+/ru0gzohUVgtRKh8B4KrTw7jtsjacVs8+/lTZhBT3A4en/YeHk+3CU+gBwFUsVBVqolvhSQ9O6XuiIoJrn2kBywA6WkvIxFfWNGJZi191FKJiKEiPNac5FOo3AKC5OdQHiEdUpyIqBk9maMqDPwBEZBR/f1a6BImoUq2dH8Kdf9TOwZ+qhgAeag6F+gHAOPJBW9r/CydaKk1UIQwnh2Bsx7S//+K6PlzQyjkAt6vzm/i79zTh1jWNCFh81k9VQwrH/Mcj//FmAdBaX/8aIB5Wk4moOIKxHTCc3LS/X8DG15YNwM+HYa51TnsAd1zehvNms6kPVRcB/LihoWbrUf/9ltHR0Q5pWtsB1JQ9GdEMeVMHEYptL8qxNqZm4y9e4oZBbhL0CHx6VT0uXcjLH1WlOAqepU1NwTdfjTKO/mxjY+MBIfH35c9FNDOGk0UwXryu1ueGuGGQmyxt9uG2y2dx8KfqJfB3Rw/+hz70DlJKMTox8TNIXFO+ZEQzEx57BVZ2tKjHzIkA1j3PDYOqmccUuG55Ha5dGuZ7/VS9JB5rjNReLYR42zo/451fJ4SQHuAzAPaWLRzRDPiSvUUf/AFuGFTt5tZ58a1L2vDhM9jRj6rabkvIG945+APHKQAAoK6ubsyGvBTAQMmjEc2AaacRiO8p2fEPbRjERwHVxBCHmvr8/5e3Yj6b+lB1G3YEPhiJRMaP98mTlr2D4+MrTWE8BaClJNGIZkQiPPIyrHy0pGcpGF7c8OJcHEjyLrHStYYsfPn8Bixr5nv9VPUGbelcdugNv+M75RUtGo3OL0A8BWBhUaMRzZA/0V3Su/+jccOgyrd2fgg3rW6An+/1U5WTQJcUuKylru6kK6OP+wjgaJFIpKtgGhcCeKpo6YhmyCwk4E90le183DCockX8Jr76nmbcuqaRgz9VPQk84TPEu041+ANT2AJYSmmMxmJ/DYivAeD8GakjHYRHN8LKx8t6Wsew8IXN87Atesq6mTRxQWcAN53biFof/82o2sk0YHyjsS78reMt+DueKZfDQ7HYQiHxbQFcPvWARDMXiO+BP9Gt5NzjIoIPccMg7YU8Bj61KsL3+skVhMTjBSFvaY1E9k3p+6Z7wrGxiYscIf8aAh+cyXGIpsLKxxEe3QhIdUPwb2Kd+OYrAWXnp5M7s9WPL69pRFOQ/ZypukmJ54SQX2+KRJ6ezvfPeOAeG4svdwz7egB/AojZMz0e0YkIaSM8shFmIaE0h4SJv90+H88PclpZJ2819amFwVsSql69gLhf2OLexsbwGzM5UNH+TKSUYnw8scwxnfdD4jwApx/+P87BUVEEJ3bCl+xVHQMAkDJqcO3v2pGxVSchAJgX8eDW85swL8L3+qmqxAHsArATAi+IgvHbmQ76Ryt5ndzbKwNWJFFj2Ha41Oei6hUZe221lR15AJN4c6VcfjdS++I/vN52nuoc7ibtSNDz/W98oOm2OSFPXnUaomJwTDNeiNYkOjtFupTn4UQZaU++8WCNI8xXIbBAdZZ3KHzl1dk7N0dDy1QHcal9wjA+uf7GZetVByGqRNrcTRGdiGOat2s4+AOA9a0zD4YDppNUHcRlpBTie6GQcyYHf6Lp4wwAaS2//aFLDRhPQuPf1S0x/++/9Mqc96jO4RIDAvjT9TeteEx1EKJKx/dkSFvylZ9FYOFJAHWqs5xMq78w50DG+/K+hK9ddZaqJsRDedv64IYvLjthb3MimjxLdQCiE3ECzt2Q6FCdYxLEV0/v73xpJDgeK5j1qsNUGwHEANy8/vPL71WdhaiacA0Aaamw7acfgsRHVeeYLEOg9Xvn9uxUnaMK/TpvOcvX37SCgz9RkfERAGlH7nmkBQ5+CSCkOstUhC2nI2WL59+YCHSqzlIF0kLKf3huaMUXDv5FW0x1GKJqxEcApB2Zl3cDaFGdYzq+sHBk2R+Gavr6sl6uB5gmAbwkpXPD+i+s5IwKUQnxEQBppbDj4c9I4EOqc0yXkKi7a/WBAQFMajcuepuCFOKf0kb2ouc4+BOVnLavVpH7yN0/7XBsbIVERHWWmXqoN/L7b+9t4auBkySA7VLghuc+v2KT6ixEbsEZANKClFLIAr5fDYM/AKzrjL7r9HBmj+ocFUBKIb4XDDmB8FbKAAALWUlEQVTncvAnKi/OAJAW7B2P3AIp71Cdo5hStthx5fqFCwpScIea4+uHkJ977vNn/lJ1ECI34lsApJzc/bMF0pEPAfCqzlJMHgNNc0L5Pzw7HJ6nOot2hHjI8Rh/9PyfrdiiOgqRW3EGgJSS8huGvX3F74TARaqzlAg3DDqaQBRSfum5m868T3UUIrfjGgBSytmx4q+rePAHuGHQWwSecqS9nIM/kR44A0DKyDcePMMxzJcB+FVnKTWXbxiUFgJ/u/7G5XdCCL4eSaQJzgCQEnLTdz2OYd4DFwz+AHBmXebdl7TF3bfKXcoXhW2vWv/5FXdw8CfSCwsAUsIJNn8dwDmqc5SR+Orp/Z11lj2uOkiZFATwP9qbdly4/kurdqkOQ0TH4iMAKju5/WfnOHA2AHDd63H9Wc8LH90wf43qHCW2zTCc6/9w48rNqoMQ0YlxBoDK6vx16wLRdOZuuHDwB4BZvvyaj3aOPa86R4lIKcT3Mkb2XA7+RPpjAUBlVZsP/ONf3fX7rOocKn1h4ciydl+uT3WOItsPR1z8/OeX3/jyjatTqsMQ0amxERCVzQc+dMNFQsq7Ysnc3HDAs2HJnAZXbpsrAP/FbYndP+mtb0M1PIYT4iEh5ZXPfXHFdtVRiGjyKv/iQxXh0kuvDyGA1wAsAAAhxNi9f3tZvrHW36o4mjJVsGHQsABuXH/Tip+pDkJEU8dHAFQWIiBux+HBHwCklA233PnMASmla18Nq+gNg6R8EgXPKg7+RJWLBQCV3CXXfvJSCfnZd358LJE957+e3LZeRSZN+O9Y1VuwhMyrDjIFKSHwlee+cOYVz928pNrWMRC5CtcAUEmtvfZTEUs6TwKoO97nt+0fa3rPitl9dTW+qtgGeKoqbMOgDY5jXPb8F5Y/oToIEc0cZwCopLzSvgtAx0m+JPTnd/0+4UhplyuTbt7XHL/o7EjyDdU5TiIvgP/R3rj93Ru+uKwyH1kQ0TG4CJBK5tJrP3EtpJjUM+IPnDXn2b/46NlrSxxJW3kHPVc+t7AxbRsh1VneRsg3HGlev+GmZa+ojkJExcVHAFQSV6z7dLO05RMAJjWg7RuIzT7ztOZdrfXB5hJH05IpULcykn7hlwN1c1VnOUwK4Nu1+cC6Z7605IDqMERUfHwEQCVRyBfuBtAyhW/x/P1/Pu/N5Z1MqTLp7sy6tCYbBoluQ8r3rb9pxZefuGWRq5s2EVUzzgBQ0V12zSc+DYi/mer3OY5s2HUw+tzFZ3XOK0GsSiDe3Zgwf3Ywks86RkBFAAncK7yeq9bfuIwb+BBVOa4BoKJ6/5U3zLZMuRVA/TQP4Xz9k+dtWbN01qpi5qokijYMGpJC/tnznz/z0TKfl4gU4SMAKibhMeV/YPqDPwAY//Pel5qSmXy8WKEqzaENg8bLuWHQLw3DXMXBn8hdOANARXPptTfcDCnvLMaxFrRH1n/nlrUXFeNYlUgKxD7+/LxkX9bbXsLTTAgp/3L9F878XgnPQfR/27vb2KrLM47jv+uc09YWHJQHGfIwHYIM204QxQzMOgYVxoCigWwKsi2Oh5FlL0Z0W8js4otlMdmWLMYlLhNRdAMypsaUxTrpeag8DBky2GYGhAGigOOhFGjp/1x7MVMdD7UP5/R/Dv1+3vbkvn4vzul95f7/7/tGjuIdAGTEtPsf+KylbYOkwkyMd7Lxwsj+fYu2jBle2t4ZAtesbF8YZFKDRzQjtbyiLtNjA8gPNADotpqamsjhd0/9UdLoTI77l3+8Xzxj0k1NJUWx3Nob30OKo+mhfaNBYtvJPpncGnjB3Fclj5U/fGjlkP9kcFwAeYZ3ANBtDTv3PyLpnkyP69LA7z8ZP5DpcfNJJi8MMmm3md2d/E7Fz1Rj6UyMCSB/sQKAbpk598FxLntBUiwb4zdduDjM3JMVowaPzMb4eSA2bciZY787NKBfWtbV32vgZk+cGhj5+o7FZVzgA0ASKwDohsrKyligyLOSrstmnbV1/xz/7+NnD2azRi4rifrYH497r2u7AlwH3Hxqw7KyH+xZcFtLhqMByGM0AOiywv4jHpM0Mdt13NRn5VObz/TmC4MqBzdO7uyFQS49V+CRioZlFfFs5QKQv9gGiC65d/bCCR6xLZIKeqrmjLs+U/+9+8Z/safq5ZpOXBj0vpl9O7ms7JUeCQYgL7ECgE6bOfO7RR6xNerByV+SNm07ePc7h0722iNqCyIa+UTFkR3tfcbkGwoihWVM/gA+CQ0AOi0oPPVTSbeFULro0aeT3hqke+2z7KtdGGTSaXNfmlxeMX/z0ltPhJENQH5hFwA6ZfqcxZPN/NcKqXlsDXzQ/qOnE5W3D78pjPo54LILg1z2ejStexMrKt4IOxyA/EEDgA6rqlrUxwp8k6RBYeY4cuLsyDHDSt8eNrjvp8PMERYz9f3SkLO7NhwuHWTuq1LHypYffGTI6bBzAcgvPAJAxxXrF5JuCTuGpMjjz28ZeL65tSnsICFoMqluaFFL7V19G8s51AdAV7ELAB1SNWfhdJn9STn0nbl1RP/EL1dUZvwEwhxz1qQtLqXSrmSsoDhho7/SHHYoAPkvZ/6ZI3dVVn+jf6EHb0saEXaWS62cP2H7l+8YeWfYOTLHz5hsm7vVRaJKqfH4Vpu49GLYqQBce7JyfCuuLYUePKkcnPwl6ecb3rp5/JgbTgy4/rpQ30vohvdMSrh5KuLRpMbu2mlWw5I+gKxjBQDtqqpeWC23jWHnaM+Q0pKtqx+tmhR2jg46alLSpbpI2lMad/9eM/OwQwHofWgAcFUz539zcNDS+jdJN4Sd5ZN8a0ZZan7lLZPDznEF+2VKyZWMWPCajV3Qq283BJA7eASAqwpaWp9SHkz+kvTMpj3lUypufHfogJIbQ46yX1Kdu6WiQeQNK68+FHIeALgiVgBwRVVzHlos89Vh5+iMfn2Kdr64asbtZtZT3+tA0l8lT7lFklHXn+1z933QQ7UBoFtoAHCZqV99aFgs6rsllYadpbPmfmFU/bI55dm6MKhV0i6Z6tw9Fb0QTdj4eaeyVAsAsopHALiUxaL+G+Xh5C9JLzXsmzR1wvB/jRlemokDi865tNNMyXRadbHrg5SNWHA+A+MCQOhYAcD/mT534cMmezrsHN1RXBTbu+6xWaNjEevsbYUcugOg16ABQJvZs5eUNEfOH1CevPjXnnvKh23+0YN3Vrb/KQ7dAdB78QgAbZrt3DzJ8n7yl6TE7iNTdu27ec/nRw36+LXFlxy6U/0We/AB9FY0AGhjZtOuodkw9viaNz/Y8JPZq90sHo1a3EbP2xd2KADIFTQAaOPSmLAzdINL2iu3uJmSFwPVb1y3+kh03eqwcwFATqIBQBuTivNoBeDDPfiKyzzeEgTJza+8eCLsUACQL2gA0Mblx3P4vdBmc22XWVyeThSpMPXyy79tDDsUAOQrGgB8xGyHXFVhx/hQk0wNLkvIPH42dmHbm+vXswcfADKEBgBtzPz37vbDkMo3Stoqs5S5kpGWfona2l+xBx8AsiRn13sRjqq5i16TNK0HSh11t0RE6URgXj9l/Og9NTU16R6oCwAQKwC4RBCxFdG0b5f0qQwPfUBSQm71QVTJ1zeueefjf6x7KcPVAADtYgUAl5levbjKPL1RUkkXh3CX/m7yhFyJaMzra/+w9nAmMwIAuocGAFc0fc6iiTI9a9K4Dnw8kGmX0oq7WTxWGE3Wrn/meNZDAgC6jAYAV3XHkiUFg46d/5pLi+SarI9WBM5JvlNmcckS0eYgVVu79kyYWQEAnUMDgI6yWbMe6C9Jr776win97+Q9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOid/gt/HEDI/jsmSQAAAABJRU5ErkJggg=="/>
                    </defs>
                </svg>

            );
        default:
            return null;
    }
};

export default SharedSvgSelector;