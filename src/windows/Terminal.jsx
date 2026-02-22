import { useState, useEffect, useRef } from 'react';
import useWindowStore from '#store/window';
import windowWrapper from '#hoc/windowWrapper';
import { techStack } from '#constants';
import { CheckIcon, FlagIcon } from 'lucide-react';
import { WindowControls } from '#components';

const PROMPT = '@Elsawy % ';
const COMMAND = 'show tech stack';
const FULL_COMMAND = PROMPT + COMMAND;
const TYPING_MS = 60;
const CURSOR_BLINK_MS = 530;
const OUTPUT_DELAY_MS = 400;

const Terminal = () => {
  const isOpen = useWindowStore((s) => s.windows.terminal?.isOpen);
  const [typedLength, setTypedLength] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const prevOpenRef = useRef(false);

  // Reset animation only when user first opens the terminal (false → true)
  useEffect(() => {
    if (isOpen && !prevOpenRef.current) {
      setTypedLength(0);
      setShowOutput(false);
    }
    prevOpenRef.current = !!isOpen;
  }, [isOpen]);

  // Typewriter: only run when terminal window is open
  useEffect(() => {
    if (!isOpen) return;
    if (typedLength >= FULL_COMMAND.length) {
      const t = setTimeout(() => setShowOutput(true), OUTPUT_DELAY_MS);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => {
      setTypedLength((n) => Math.min(n + 1, FULL_COMMAND.length));
    }, TYPING_MS);
    return () => clearInterval(id);
  }, [isOpen, typedLength]);

  // Blinking cursor: only when terminal is open
  useEffect(() => {
    if (!isOpen) return;
    const id = setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, [isOpen]);

  const typedText = FULL_COMMAND.slice(0, typedLength);
  const promptPart = typedText.slice(0, PROMPT.length);
  const commandPart = typedText.slice(PROMPT.length);

  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2> Tech Stack </h2>
      </div>

      <div className="techstack">
        <p className="terminal-command">
          <span className="font-bold">{promptPart}</span>
          {commandPart}
          <span className={`terminal-cursor ${cursorVisible ? 'cursor-visible' : 'cursor-hidden'}`} aria-hidden>
            |
          </span>
        </p>

        {showOutput && (
          <div className="terminal-output">
            <div className="label">
              <p className="w-32">Category</p>
              <p>Technologies</p>
            </div>

            <ul className="content">
              {techStack.map(({ category, items }) => (
                <li key={category} className="flex items-center">
                  <CheckIcon className="check" size={20} />
                  <h3>{category}</h3>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>
                        {item}
                        {i < items.length - 1 && <span className="text-gray-500">, </span>}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="footnote">
              <p>
                <CheckIcon size={20} /> 5 of 5 stacks loaded successfully (100%)
              </p>
              <p className="text-black">
                <FlagIcon size={15} fill="black" /> Render time :6ms
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const TerminalWindow = windowWrapper(Terminal, 'terminal');

export default TerminalWindow;
