import React from 'react';
import styles from './AiHostessDemo.module.css';

/**
 * AI Hostess demo block.
 * v1 ships a static "what it sounds like" mock conversation. Real demo content
 * is gated on KB-46/48 asset call — Cal lane will produce either a 60-second
 * recorded demo (audio + waveform) or an interactive iframe embed (preferred
 * if the AI-hostess web widget is sandbox-ready by KB-43 asset deadline).
 */
export const AiHostessDemo: React.FC = () => {
    return (
        <section id="demo" className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.header}>
                    <div className={styles.eyebrow}>AI Hostess — Live Demo</div>
                    <h2 className={styles.headline}>
                        Hear what your <span className="text-gradient">phone sounds like</span> at 11pm on a Saturday.
                    </h2>
                    <p className={styles.lead}>
                        A short walkthrough of a real inbound call — the AI hostess takes the booking, confirms the party size, drops the reservation onto the host stand, and the team only gets pulled in when it should be.
                    </p>
                </div>

                <div className={styles.demoFrame}>
                    {/* TODO(KB-43 asset call): replace with real audio embed or interactive iframe */}
                    <div className={styles.transcript}>
                        <div className={`${styles.bubble} ${styles.guest}`}>
                            <div className={styles.bubbleSpeaker}>Guest</div>
                            <div className={styles.bubbleText}>Hi, can I get a reservation for four people Saturday at seven?</div>
                        </div>
                        <div className={`${styles.bubble} ${styles.host}`}>
                            <div className={styles.bubbleSpeaker}>AI Hostess</div>
                            <div className={styles.bubbleText}>Of course — Saturday at seven for four guests. Any allergies or special occasions I should let the team know about?</div>
                        </div>
                        <div className={`${styles.bubble} ${styles.guest}`}>
                            <div className={styles.bubbleSpeaker}>Guest</div>
                            <div className={styles.bubbleText}>It's a birthday, and one guest has a peanut allergy.</div>
                        </div>
                        <div className={`${styles.bubble} ${styles.host}`}>
                            <div className={styles.bubbleSpeaker}>AI Hostess</div>
                            <div className={styles.bubbleText}>Got it — birthday and peanut allergy noted on the reservation. I'll text you a confirmation. The kitchen will see the allergy on the ticket.</div>
                        </div>
                        <div className={styles.transcriptMeta}>
                            <span>📞 Inbound call</span>
                            <span>🔁 Reservation written to POS</span>
                            <span>📲 Confirmation SMS sent</span>
                        </div>
                    </div>
                </div>

                <div className={styles.note}>
                    Demo content for marketing illustration only — real AI hostess voice samples coming with KB-43 asset pass.
                </div>
            </div>
        </section>
    );
};
