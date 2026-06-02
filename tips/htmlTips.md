

# HTML tips


?quality=100
?width=1198&trim=1,1&bg-color=000&pad=1,1

?src=nome
&src=nome
?src={keyword}

parametros:
    {device}
    {keyword}
    {matchtype}
    {placement}
    {creative}

?src={keyword}|{device}



Name	Class				Min. Width		Max. Width
tiny	vjs-layout-tiny		0				210
xsmall	vjs-layout-x-small	211				320
small	vjs-layout-small	321				425
medium	vjs-layout-medium	426				768
large	vjs-layout-large	769				1440
xlarge	vjs-layout-x-large	1441			2560
huge	vjs-layout-huge		2561			Infinity

@media (
    479, 480px,
    767, 768px,
)

@media only screen and (max-width: 479px) {}

480     |   768 |   992 |   1200
540     |   720 |   960 |   1140

width: clamp( 540, 720, 960 );
width: clamp( 540px, 90%, 960px );


407	>= 2crd max-width: px
575 >= 3crd max-width: px
743 >= 4crd max-width: px
900 >= 4crd max-width: px
911 >= 5crd max-width: 876px


body
bg-pai	w908px margin 16px 0 0 padding 0 16px
bg-mae w892px margin -8px
bg-filho w876px margin 8px

pai
    min-height: calc(100vh - 133px);
    padding-right: 16px;
    margin-top: 16px;
    width: 908px;
    padding-left: 16px;
    max-width: 100%;

mae
		justify-content: center;
		margin-top: -8px;
		flex-shrink: 0;
		margin-bottom: -8px;
		margin-right: -8px;
		flex-wrap: wrap;
		position: relative;
		display: flex;
		align-items: stretch;
		margin-left: -8px;
		z-index: 0;
		flex-direction: row;

filho
		margin-right: 8px;
		position: relative;
		min-width: 0;
		margin-left: 8px;
		max-width: 876px;
		flex-shrink: 1;
		flex-basis: 876px;
		z-index: 0;
		flex-grow: 1;
		margin-bottom: 8px;
		margin-top: 8px;








