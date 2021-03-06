import unittest
from NumberToRoman import *

class NumberToRomanTest(unittest.TestCase):
    def test_0_donne_vide(self):
        self.assertEqual("", convert(0))

    def test_1_donne_I(self):
        self.assertEqual("I", convert(1))

    def test_5_donne_V(self):
        self.assertEqual("V", convert(5))

    def test_6_donne_VI(self):
        self.assertEqual("VI", convert(6))

    def test_4_donne_IV(self):
        self.assertEqual("IV", convert(4))

    def test_2_donne_II(self):
        self.assertEqual("II", convert(2))

    def test_1977_donne_MCMLXXVII(self):
        self.assertEqual("MCMLXXVII", convert(1977))

if __name__ == "__main__":
    unittest.main()
