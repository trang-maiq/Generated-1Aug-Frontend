import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

export default function CtaSimpleCentered({
  theme
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            Elevate Your Blogging Game.
            <br />
            Get Started with Personal Blog Today.
          </h2>
          <p
            className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${
              theme === "dark"
                ? "text-ai-subtext-dark"
                : "text-ai-subtext-regular"
            }`}
          >
            Unlock your creative potential and increase your productivity using our innovative personal blog platform tailored for professionals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button theme={theme}>Get started</Button>
            <LinkButton theme={theme}>
              Share Now!
            </LinkButton>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
