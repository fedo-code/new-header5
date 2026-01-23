
"use client";

import Eventsection from "../../component/Eventsection";
import FrancampSection from "../../component/FrancampSection";
import EventsCalendarSection from "../../component/EventsCalendarSection";
import SponsorSection from "../../component/SponsorSection";

export default function EventsPage() {
  return (
    <>
      <div className="mt-0" />
      <Eventsection showHeader={false} />

      <div className="mt-10" />
      <FrancampSection />

      <div className="mt-10" />
      <EventsCalendarSection />

      <div className="mt-10" />
      <SponsorSection />
    </>
  );
}

