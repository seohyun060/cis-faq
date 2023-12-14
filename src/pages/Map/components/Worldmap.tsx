import { useEffect, useState, useRef, useCallback } from 'react';
import MapSVG from './MapSVG';
type Props = {
    displayWidth: number;
};

interface CancerData {
    code: string;
    country: string;
    rate: string;
}
const Worldmap = ({ displayWidth }: Props) => {
    const [currentCountry, setCurrentCountry] = useState('');
    const currentRef = useRef(currentCountry);

    const [cancerDatas, setCancerDatas] = useState<CancerData[]>([]);
    const createTooltip = useCallback(
        (e: MouseEvent, text: string): HTMLDivElement => {
            const tooltip = document.createElement('div');
            tooltip.style.display = 'block';
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = '#fff';
            tooltip.style.border = '1px solid #ddd';
            tooltip.style.padding = '10px';
            tooltip.style.borderRadius = '10px';
            tooltip.style.zIndex = '20';
            tooltip.style.fontFamily = 'Pretendard';
            tooltip.style.width = 'auto'; // width를 auto로 설정
            tooltip.style.opacity = '0'; // 초기 투명도를 0으로 설정
            tooltip.style.transform = 'scale(0)'; // 초기 크기를 0으로 설정
            tooltip.style.textAlign = 'center'; // 텍스트 중앙 정렬 추가
            tooltip.innerHTML = text.replace('/', '<br>'); // 텍스트를 두 줄로 나누기 위해 <br> 태그로 변경
            tooltip.style.transition = 'all 0.3s ease-out'; // 트랜지션 효과 추가
            document.body.appendChild(tooltip);
            tooltip.style.left = `${e.pageX - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${e.pageY - tooltip.offsetHeight}px`;

            setTimeout(() => {
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'scale(1)';
            }, 0);
            return tooltip;
        },
        [currentCountry]
    );
    const removeTooltip = useCallback(
        (tooltip: HTMLDivElement, delay: number): void => {
            setTimeout(() => {
                tooltip.style.opacity = '0';
                tooltip.style.transform = 'scale(0)';
                tooltip.style.transition = 'scale 0.3s ease-out';
                tooltip.remove();
            }, delay);
        },
        [currentCountry]
    );

    const fetchData = useCallback(async () => {
        const response = await fetch('/newdata.json');
        const data = await response.json();
        setCancerDatas(data);
    }, [cancerDatas]);

    const fillColor = useCallback(
        (country: SVGPathElement, rate: number, clicked: boolean) => {
            if (!clicked) {
                if (rate > 20) {
                    country.style.fill = '#D11e53';
                } else if (rate > 17.5) {
                    country.style.fill = '#fcad4c';
                } else if (rate > 13) {
                    country.style.fill = '#86ba6b';
                } else {
                    country.style.fill = '#5cbda6';
                }
            } else {
                if (rate > 20) {
                    country.style.fill = '#801333';
                } else if (rate > 17.5) {
                    country.style.fill = '#c48639';
                } else if (rate > 13) {
                    country.style.fill = '#49663a';
                } else {
                    country.style.fill = '#33665d';
                }
            }
        },
        [currentCountry]
    );
    const onCountryClick = useCallback(
        (e: MouseEvent) => {
            const target = e.currentTarget as SVGPathElement;
            const clickedCountryCode = target.className.baseVal.slice(-2);
            console.log(clickedCountryCode);
            if (clickedCountryCode !== currentRef.current) {
                const clickedData: CancerData | undefined = cancerDatas.find(
                    (cancerData: CancerData) => cancerData.code === clickedCountryCode
                );
                clickedData !== undefined
                    ? fillColor(target, parseFloat(clickedData.rate), true)
                    : (target.style.fill = '#7d7d7d');
                const newTooltip =
                    clickedData !== undefined
                        ? createTooltip(e, `${clickedData.country}/Death rate: ${clickedData.rate}`)
                        : createTooltip(e, `No data`);

                setCurrentCountry(clickedCountryCode);

                removeTooltip(newTooltip, 3000);
                setTimeout(() => {
                    setCurrentCountry('');
                    clickedData !== undefined
                        ? fillColor(target, parseFloat(clickedData.rate), false)
                        : (target.style.fill = '#bdbdbd');
                }, 3000);
            }
        },
        [currentCountry, currentRef, cancerDatas]
    );

    useEffect(() => {
        currentRef.current = currentCountry;
    }, [currentCountry]);
    useEffect(() => {
        fetchData();
        return () => {};
    }, []);
    useEffect(() => {
        if (cancerDatas.length !== 0) {
            const countries: NodeListOf<SVGPathElement> = document.querySelectorAll('#worldMap path');
            countries.forEach((country: SVGPathElement) => {
                country.style.transition = 'fill 0.3s ease-out';
                const countryCode = country.className.baseVal.slice(-2);
                const countryData: CancerData | undefined = cancerDatas.find(
                    (cancerData: CancerData) => cancerData.code === countryCode
                );
                if (countryData !== undefined) {
                    const deathRate = parseFloat(countryData.rate);
                    fillColor(country, deathRate, false);
                } else {
                    country.style.fill = '#bdbdbd';
                }
                country.addEventListener('click', onCountryClick);
            });
        }
        return () => {};
    }, [cancerDatas]);

    return (
        <div
            className="map"
            style={{
                overflow: 'hidden',
            }}
        >
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <MapSVG displayWidth={displayWidth} />
            <div id="overlay" />
        </div>
    );
};

export default Worldmap;
