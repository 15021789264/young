from deep_translator import GoogleTranslator
from typing import Optional

class Translator:
    """Ein einfacher Übersetzer für Text zwischen Sprachen."""

    def __init__(self, source_lang: str = 'auto', target_lang: str = 'en'):
        """
        Initialisiert den Übersetzer.

        Args:
            source_lang: Quellsprache (z.B. 'de', 'en', 'fr'). 'auto' für automatische Erkennung.
            target_lang: Zielsprache (z.B. 'en', 'de', 'fr').
        """
        self.source_lang = source_lang
        self.target_lang = target_lang

    def translate(self, text: str) -> Optional[str]:
        """
        Übersetzt den gegebenen Text in die Zielsprache.

        Args:
            text: Der zu übersetzende Text.

        Returns:
            Der übersetzte Text oder None bei Fehler.
        """
        if not text or not isinstance(text, str):
            return None

        try:
            translator = GoogleTranslator(
                source=self.source_lang,
                target=self.target_lang
            )
            return translator.translate(text)
        except Exception as e:
            print(f"Übersetzungsfehler: {e}")
            return None

# Beispielverwendung
if __name__ == "__main__":
    translator = Translator(source_lang='de', target_lang='en')
    text = "Hallo, wie geht es dir?"
    translated = translator.translate(text)
    print(f"Original: {text}")
    print(f"Übersetzt: {translated}")