import React from 'react';

const travelDestinations = [
  {
    destination: "Cortona, Italy",
    date: "Summer 2025",
    purpose: "Culinary Internship",
    flightCode: "AA1245",
    gate: "A12"
  },
  {
    destination: "London, England",
    date: "Spring 2024",
    purpose: "Study Abroad",
    flightCode: "JL2468",
    gate: "D21"
  },
  {
    destination: "Croatia",
    date: "Summer 2016",
    purpose: "Family Vacation",
    flightCode: "UA3567",
    gate: "B8"
  },
  {
    destination: "St. Lucia",
    date: "Winter 2022",
    purpose: "Family Vacation",
    flightCode: "DL8901",
    gate: "C15"
  },
];

const PlaneTicket = ({ destination, date, purpose, flightCode, gate, index }) => {
  const colors = [
    'linear-gradient(135deg, #8b9dc3 0%, #9bb5d6 100%)',
    'linear-gradient(135deg, #ddb7dc 0%, #c8a2c8 100%)',
    'linear-gradient(135deg, #87ceeb 0%, #98d8e8 100%)',
    'linear-gradient(135deg, #90ee90 0%, #a8e6a3 100%)'
  ];

  const ticketStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    padding: '24px',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    background: colors[index % colors.length],
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    height: '250px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div 
      className="plane-ticket"
      style={ticketStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '-16px',
        right: '-16px',
        width: '48px',
        height: '48px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-12px',
        left: '-12px',
        width: '32px',
        height: '32px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '50%'
      }} />

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ marginRight: '8px' }}
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
          <span style={{
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '1px',
            opacity: 0.9
          }}>
            BOARDING PASS
          </span>
        </div>
      </div>

      {/* Destination */}
      <div style={{ marginBottom: '24px', flex: 1 }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '8px',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          margin: 0,
          marginBottom: '8px'
        }}>
          {destination}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <svg 
            width="12" 
            height="12" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ marginRight: '4px', opacity: 0.8 }}
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span style={{
            fontSize: '11px',
            opacity: 0.9,
            fontStyle: 'italic'
          }}>
            {purpose}
          </span>
        </div>
      </div>

      {/* Flight Details */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end',
        marginTop: 'auto'
      }}>
        <div>
          <p style={{
            fontSize: '10px',
            opacity: 0.7,
            marginBottom: '4px',
            margin: 0,
            marginBottom: '4px'
          }}>
            DATE
          </p>
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            margin: 0
          }}>
            {date}
          </p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <p style={{
            fontSize: '10px',
            opacity: 0.7,
            marginBottom: '4px',
            margin: 0,
            marginBottom: '4px'
          }}>
            FLIGHT • GATE
          </p>
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            margin: 0
          }}>
            {flightCode} • {gate}
          </p>
        </div>
      </div>

      {/* Decorative ticket hole */}
      <div style={{
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '24px',
        height: '24px',
        border: '1px dashed rgba(255, 255, 255, 0.4)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '12px',
          height: '12px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '50%'
        }} />
      </div>
    </div>
  );
};

export default function TravelSection() {
  return (
    <div style={{
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '64px 40px'
    }}>
      {/* Section Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: 700,
          color: '#2d2e32',
          marginBottom: '24px',
          letterSpacing: '2px',
          position: 'relative',
          display: 'inline-block',
          margin: 0,
          marginBottom: '24px'
        }}>
          MY TRAVELS
          <span style={{
            content: '""',
            position: 'absolute',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            borderRadius: '2px',
            display: 'block'
          }} />
        </h2>
        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '500px',
          margin: '24px auto 0',
          marginTop: '36px'
        }}>
          Exploring the world one destination at a time ✈️
        </p>
      </div>

      {/* Tickets Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        width: '100%'
      }}>
        {travelDestinations.map((destination, index) => (
          <PlaneTicket
            key={index}
            {...destination}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}