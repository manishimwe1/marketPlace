"use client";

import React, { useEffect, useState } from "react";

function CountdownTimer({ days }: { days: number }) {
	const [timer, setTimer] = useState<string>("");

	useEffect(() => {
		const millisecondsInADay: number =
			1000 * 60 * 60 * 24;
		const endDate: Date = new Date(
			Date.now() + days * millisecondsInADay,
		);

		function formatTime(time: number): string {
			return time < 10 ? `0${time}` : `${time}`;
		}

		function updateTimer(): void {
			const now: Date = new Date();
			const timeDifference: number =
				endDate.getTime() - now.getTime();

			if (timeDifference <= 0) {
				clearInterval(timerInterval);
				setTimer("Countdown expired!");
			} else {
				const daysLeft: number = Math.floor(
					timeDifference / millisecondsInADay,
				);
				const hoursLeft: number = Math.floor(
					(timeDifference % millisecondsInADay) /
						(1000 * 60 * 60),
				);
				const minutesLeft: number = Math.floor(
					(timeDifference % (1000 * 60 * 60)) /
						(1000 * 60),
				);
				const secondsLeft: number = Math.floor(
					(timeDifference % (1000 * 60)) / 1000,
				);

				setTimer(
					`${formatTime(hoursLeft)}:${formatTime(
						minutesLeft,
					)}:${formatTime(secondsLeft)}`,
				);
			}
		}

		const timerInterval = setInterval(
			updateTimer,
			1000,
		);

		// Clear interval on component unmount
		return () => {
			clearInterval(timerInterval);
		};
	}, [days]);

	return <div>{timer}</div>;
}

export default CountdownTimer;
